import React, {FunctionComponent} from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { CartItem } from '../../store/cart/cart.types';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

interface DesiredSelection {
    cartItems: Array<CartItem>
    total: number
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CheckoutPage: FunctionComponent<PropsFromRedux> = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem: CartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
            <span>
                Total: {total}€
            </span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

export default connector(CheckoutPage);
