import { ItemCard } from './cart.types';

export function addToCart(cartItems: Array<ItemCard>, cartItemToAdd: ItemCard): Array<ItemCard> {
    const existingCartItem = cartItems.find(
        (cartItem: ItemCard) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem: ItemCard) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
