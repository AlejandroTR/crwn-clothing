import { CartItem, CartActionTypes, TOGGLE_CART, ADD_TO_CART } from './cart.types';

export function toggleCart(): CartActionTypes {
    return {
        type: TOGGLE_CART
    }
}

export function addToCart(item: CartItem): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
