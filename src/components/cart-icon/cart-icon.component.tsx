import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { ToggleCartAction } from '../../store/cart/types';
import { toggleCart } from '../../store/cart/actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

const mapDispatch = (dispatch: Dispatch<ToggleCartAction>) => ({
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
