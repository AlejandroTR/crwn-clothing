import {
    CartItem,
    CartActionTypes,
    TOGGLE_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY
} from './cart.types';

export function toggleCart(): CartActionTypes {
    return {
        type: TOGGLE_CART
    };
}

export function addToCart(item: CartItem): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: item
    };
}

export function removeFromCart(item: CartItem): CartActionTypes {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
}

export function increaseQuantity(item: CartItem): CartActionTypes {
    return {
        type: INCREASE_QUANTITY,
        payload: item
    };
}

export function decreaseQuantity(item: CartItem): CartActionTypes {
    return {
        type: DECREASE_QUANTITY,
        payload: item
    };
}
