import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './nav.styles.scss';

interface NavProps {
    authUser?: any;
}

const Nav: FunctionComponent<NavProps> = ({ authUser }) => (
    <div className="nav">
        <Link className='nav-item' to='/shop'>
            Shop
        </Link>
        <Link className='nav-item' to='/signin'>
            Contact
        </Link>
        {authUser ? (
            <div className='nav-item' onClick={() => auth.signOut()}>
                Sign out
            </div>
        ) : (
            <Link className='nav-item' to='/signin'>
                Sing in
            </Link>
        )}
    </div>
)

export default Nav;
