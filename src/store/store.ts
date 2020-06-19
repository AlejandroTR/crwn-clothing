import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import { Persistor } from "redux-persist/es/types";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { RootState, persistedReducer } from './reducer';

export function configureStore(initialState?: RootState): Array<Store<RootState> | Persistor> {
    let middleware: Array<Middleware> = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger);
    }

    const store =  createStore(persistedReducer, initialState, applyMiddleware(...middleware)) as Store<RootState>;
    const persistor = persistStore(store);

    return [ store, persistor ];
}
