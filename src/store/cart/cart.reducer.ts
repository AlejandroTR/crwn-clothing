import { CartActionTypes, CartState, TOGGLE_CART, ADD_TO_CART } from './cart.types';
import { addToCart } from './cart.utils';

const initialState: CartState  = {
    cartOpen: false,
    cartItems: []
};

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
