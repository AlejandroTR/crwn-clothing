import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';

import { configureStore } from './store/store';
import { RootState } from './store/reducer';

import App from './App';

import './index.scss';

const [ store, persistor ] = configureStore();

ReactDOM.render(
    <Provider store={store as Store<RootState>}>
        <BrowserRouter>
            <PersistGate persistor={persistor as Persistor}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </PersistGate>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
