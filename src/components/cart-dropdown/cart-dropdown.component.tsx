import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { CartItem as CItem } from '../../store/cart/cart.types';
import { toggleCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

interface DesiredSelection {
    cartItems: Array<CItem>
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    cartItems: selectCartItems
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteComponentProps

const CartDropdown: FunctionComponent<Props> = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map((cartItem: CItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>
                    Your cart is empty
                </span>
            )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCart());
        }}>
            Go to checkout
        </CustomButton>
    </div>
);

export default withRouter(connector(CartDropdown));
