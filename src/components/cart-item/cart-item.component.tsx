import React, {FunctionComponent} from 'react';

import { ItemCard } from '../../store/cart/cart.types';

import './cart-item.styles.scss';

interface CartItemProps {
    item: ItemCard;
}

const CartItem: FunctionComponent<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x {price}€
            </span>
        </div>
    </div>
);

export default CartItem;
