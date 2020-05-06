import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';
import { CartActionTypes } from '../../store/cart/cart.types';
import { toggleCart } from '../../store/cart/cart.actions';
import { selectCartItemsCount } from '../../store/cart/cart.selectors';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

const mapState = (state: RootState) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatch = (dispatch: Dispatch<CartActionTypes>) => ({
    toggleCart: () => dispatch(toggleCart())
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartIcon: FunctionComponent<PropsFromRedux> = ({ toggleCart, itemCount }) => (
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

export default connector(CartIcon);
