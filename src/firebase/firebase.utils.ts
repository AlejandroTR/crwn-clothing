import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { User } from 'firebase';

const config: Object = {
    apiKey: 'AIzaSyCThm4Z0OjBBlI4BZEZCikAIIeydpdR0pc',
    authDomain: 'crwn-db-216e7.firebaseapp.com',
    databaseURL: 'https://crwn-db-216e7.firebaseio.com',
    projectId: 'crwn-db-216e7',
    storageBucket: 'crwn-db-216e7.appspot.com',
    messagingSenderId: '546489560866',
    appId: '1:546489560866:web:327c1c31a1187e0a63bf7b',
    measurementId: 'G-E8JGGFQP5E'
};

export const createUserProfileDocument = async (userAuth: User, additionalData?: any) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (e) {
                console.log('error creating modules', e.message)
            }
        }

        return userRef;
    }


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
