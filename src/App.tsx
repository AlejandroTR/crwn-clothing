import React, { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { Unsubscribe } from 'firebase';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { SetUserAction } from './store/user/types';
import { setUser } from './store/user/actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';

import { User } from './models/user';

const mapDispatch = (dispatch: Dispatch<SetUserAction>) => ({
    user: (user: User | null) => dispatch(setUser(user))
})

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

class App extends Component<PropsFromRedux> {
    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        const { user } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                if (userRef) {
                    userRef.onSnapshot(snapShot => {
                        user({
                            id: snapShot.id,
                            ...snapShot.data()
                        });
                    });
                }
            }

            user(userAuth as null)
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
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default connector(App);
