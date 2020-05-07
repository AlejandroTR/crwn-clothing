import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { CartItem, CartActionTypes } from '../../store/cart/cart.types';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/cart/cart.actions';

import './checkout-item.styles.scss';

const mapDispatch = (dispatch: Dispatch<CartActionTypes>) => ({
    removeFromCart: (item: CartItem) => dispatch(removeFromCart(item)),
    increaseQuantity: (item: CartItem) => dispatch(increaseQuantity(item)),
    decreaseQuantity: (item: CartItem) => dispatch(decreaseQuantity(item)),
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface CheckoutItemProps extends PropsFromRedux {
    cartItem: CartItem;
}

const CheckoutItem: FunctionComponent<CheckoutItemProps> = ({
    cartItem,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}) => {
    const { imageUrl, name, quantity, price } = cartItem

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseQuantity(cartItem)}>
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className='arrow' onClick={() => increaseQuantity(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

export default connector(CheckoutItem);
