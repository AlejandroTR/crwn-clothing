import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { Persistor } from "redux-persist/es/types";
import logger from 'redux-logger';

import { RootState, persistedReducer } from './reducer';

export function configureStore(initialState?: RootState): Array<Store<RootState> | Persistor> {
    let middleware = [];

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger);
    }

    const store =  createStore(persistedReducer as any, initialState as any, applyMiddleware(...middleware)) as Store<RootState>;
    const persistor = persistStore(store);

    return [ store, persistor ];
}
