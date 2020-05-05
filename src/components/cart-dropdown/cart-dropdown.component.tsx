import React, { FunctionComponent } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown: FunctionComponent = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

export default CartDropdown;
