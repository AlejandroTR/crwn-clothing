import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../nav/nav.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

const Header: FunctionComponent = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <Nav />
    </div>
)

export default Header;
