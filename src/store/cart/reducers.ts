import { CartActionTypes, CartState, TOGGLE_CART } from './types';

const initialState: CartState  = { cartOpen: false };

export function cardReducer(state = initialState, action: CartActionTypes): CartState {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            }
        default:
            return state;
    }
}
