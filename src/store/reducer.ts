import { combineReducers } from 'redux';

import { userReducer } from './user/reducers';
import { cardReducer } from './cart/reducers';

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cardReducer
});

export type RootState = ReturnType<typeof rootReducer>
