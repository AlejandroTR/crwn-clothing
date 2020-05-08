import React, { Component, ReactNode } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { Unsubscribe } from 'firebase';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { RootState } from './store/reducer';
import { SetUserAction } from './store/user/user.types';
import { setUser } from './store/user/user.actions';
import { selectCurrentUser } from './store/user/user.selectors';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { User } from './models/user';

interface DesiredSelection {
    user: User | null | undefined;
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    user: selectCurrentUser
});

const mapDispatch = (dispatch: Dispatch<SetUserAction>) => ({
    setUser: (user: User | null) => dispatch(setUser(user))
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends Component<PropsFromRedux> {
    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                if (userRef) {
                    userRef.onSnapshot(snapShot => {
                        this.props.setUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        });
                    });
                }
            }

            this.props.setUser(userAuth as null)
        })
    }

    componentWillUnmount(): void {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }
    }

    render(): ReactNode {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.user ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

export default connector(App);
