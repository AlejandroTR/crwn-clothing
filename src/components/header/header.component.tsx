import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';
import { selectCartOpen } from '../../store/cart/cart.selectors';

import Nav from '../nav/nav.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

const mapState = (state: RootState) => ({
    cartOpen: selectCartOpen(state)
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Header: FunctionComponent<PropsFromRedux> = ({ cartOpen }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <Nav />
        {
            cartOpen ? <CartDropdown /> : null
        }
    </div>
)

export default connector(Header);
