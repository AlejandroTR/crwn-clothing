import { ShopState, UPDATE_COLLECTIONS, ShopActionTypes } from './shop.types';

const initialState: ShopState = {
    collections: null
};

export function shopReducer(state = initialState, action: ShopActionTypes): ShopState {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}
