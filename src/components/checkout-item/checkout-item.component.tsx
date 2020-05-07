import React, {FunctionComponent} from 'react';

import { CartItem } from '../../store/cart/cart.types';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
    cartItem: CartItem;
}

const CheckoutItem: FunctionComponent<CheckoutItemProps> = ({
cartItem: {
        imageUrl,
        name,
        quantity,
        price
    }
}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>
            &#10005;
        </div>
    </div>
);

export default CheckoutItem;
