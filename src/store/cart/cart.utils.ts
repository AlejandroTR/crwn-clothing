import { CartItem } from './cart.types';

export function addToCart(cartItems: Array<CartItem>, cartItemToAdd: CartItem): Array<CartItem> {
    const existingCartItem = cartItems.find(
        (cartItem: CartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem: CartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export function decreaseQuantity(cartItems: Array<CartItem>, cartItemToRemove: CartItem): Array<CartItem> {
    const existingCartItem = cartItems.find(
        (cartItem: CartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem: CartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem: CartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}
