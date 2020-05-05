import { Store, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { RootState, rootReducer } from './reducer';

export function configureStore(initialState?: RootState): Store<RootState> {
    let middleware = applyMiddleware(logger);

    return createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;
}
