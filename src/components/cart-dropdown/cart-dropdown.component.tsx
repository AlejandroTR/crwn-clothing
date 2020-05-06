import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';
import { ItemCard } from '../../store/cart/cart.types';
import { selectCartItems } from '../../store/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const mapState = (state: RootState) => ({
    cartItems: selectCartItems(state)
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
