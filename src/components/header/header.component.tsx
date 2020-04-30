import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../nav/nav.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

interface HeaderProps {
    authUser?: any;
}

const Header: FunctionComponent<HeaderProps> = ({ authUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <Nav authUser={authUser} />
    </div>
)

export default Header;
