import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { CartActionTypes } from '../../store/cart/cart.types';
import { toggleCart } from '../../store/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

const mapDispatch = (dispatch: Dispatch<CartActionTypes>) => ({
    toggleCart: () => dispatch(toggleCart())
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartIcon: FunctionComponent<PropsFromRedux> = ({ toggleCart }) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

export default connector(CartIcon);
