import React, { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Unsubscribe } from 'firebase';
import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';

type AppState = {
    authUser?: any;
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            authUser: null
        }
    }

    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(authUser => {
            this.setState({ authUser })

            console.log(authUser)
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
                <Header authUser={this.state.authUser} />
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
