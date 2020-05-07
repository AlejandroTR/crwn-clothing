import { Item } from '../../models/collection';

export interface CartItem extends Item {
    quantity: number;
}

export interface CartState {
    cartOpen: boolean;
    cartItems: Array<CartItem>
}

export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export interface ToggleCartAction {
    type: typeof TOGGLE_CART
}

export interface AddToCartAction {
    type: typeof ADD_TO_CART
    payload: CartItem
}

export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART
    payload: CartItem
}

export interface IncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY
    payload: CartItem
}

export interface DecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY
    payload: CartItem
}

export type CartActionTypes =
    ToggleCartAction
    | AddToCartAction
    | RemoveFromCartAction
    | IncreaseQuantityAction
    | DecreaseQuantityAction;
