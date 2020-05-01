import React, { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Unsubscribe } from 'firebase';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';

import { User } from './model/user';

type AppState = {
    currentUser: User | null;
}

class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                if (userRef) {
                    userRef.onSnapshot(snapShot => {
                        this.setState({
                            currentUser: {
                                id: snapShot.id,
                                ...snapShot.data()
                            }
                        });

                        console.log(this.state)
                    });
                }
            }

            this.setState({ currentUser: userAuth as null })
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
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
