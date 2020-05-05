import { ItemCard, CartActionTypes, TOGGLE_CART, ADD_TO_CART } from './cart.types';

export function toggleCart(): CartActionTypes {
    return {
        type: TOGGLE_CART
    }
}

export function addToCart(item: ItemCard): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
