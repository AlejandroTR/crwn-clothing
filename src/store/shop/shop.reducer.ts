import { ShopState } from './shop.types';
import { AnyAction } from 'redux';

import SHOP_DATA from './shop.data';

const initialState: ShopState = {
    collections: SHOP_DATA
};

export function shopReducer(state = initialState, action: AnyAction): ShopState {
    switch (action.type) {
        default:
            return state;
    }
}
