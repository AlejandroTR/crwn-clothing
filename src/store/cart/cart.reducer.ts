import {
    CartItem,
    CartState,
    TOGGLE_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CartActionTypes
} from './cart.types';
import { addToCart, decreaseQuantity } from './cart.utils';

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
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem: CartItem) => cartItem.id !== action.payload.id
                )
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem: CartItem) =>
                    cartItem.id === action.payload.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}
