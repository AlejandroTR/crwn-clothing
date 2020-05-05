import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';

import Nav from '../nav/nav.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

const mapState = ({ cart: { cartOpen } }: RootState) => ({
    cartOpen
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
