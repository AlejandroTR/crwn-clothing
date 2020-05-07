import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { CartItem, CartState } from './cart.types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart: CartState) => cart.cartItems
);

export const selectCartOpen = createSelector(
    [selectCart],
    (cart: CartState) => cart.cartOpen
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems: Array<CartItem>) =>
        cartItems.reduce(
            (accumulatedQuantity: number, cartItem: CartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems: Array<CartItem>) =>
        cartItems.reduce(
            (accumulatedQuantity: number, cartItem: CartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);
