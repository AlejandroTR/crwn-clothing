import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { directoryReducer } from './directory/directory.reducer';
import { shopReducer } from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const persistedReducer: Reducer = persistReducer<RootState, any>(persistConfig, rootReducer);
