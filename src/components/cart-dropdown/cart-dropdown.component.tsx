import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';
import { ItemCard } from '../../store/cart/cart.types';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const mapState = ({ cart: { cartItems } }: RootState) => ({
    cartItems
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartDropdown: FunctionComponent<PropsFromRedux> = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem: ItemCard) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

export default connector(CartDropdown);
