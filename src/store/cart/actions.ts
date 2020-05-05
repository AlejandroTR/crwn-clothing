import { TOGGLE_CART, CartActionTypes } from './types';

export function toggleCart(): CartActionTypes {
    return {
        type: TOGGLE_CART
    }
}
