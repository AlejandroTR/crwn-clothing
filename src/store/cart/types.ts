export interface CartState {
    cartOpen: boolean;
}

export const TOGGLE_CART = 'TOGGLE_CART';

export interface ToggleCartAction {
    type: typeof TOGGLE_CART
}

export type CartActionTypes = ToggleCartAction;
