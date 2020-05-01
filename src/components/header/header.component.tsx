import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../nav/nav.component';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/crown.svg';

interface HeaderProps {
    currentUser?: any;
}

const Header: FunctionComponent<HeaderProps> = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <Nav currentUser={currentUser} />
    </div>
)

export default Header;
