import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { ItemCard } from './cart.types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity: number, cartItem: ItemCard) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);
