import { Item } from '../../models/collection';

export interface ItemCard extends Item {
    quantity: number;
}

export interface CartState {
    cartOpen: boolean;
    cartItems: Array<ItemCard>
}

export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';


export interface ToggleCartAction {
    type: typeof TOGGLE_CART
}

export interface AddToCartAction {
    type: typeof ADD_TO_CART
    payload: ItemCard
}

export type CartActionTypes = ToggleCartAction | AddToCartAction;
