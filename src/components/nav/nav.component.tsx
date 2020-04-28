import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './nav.styles.scss';

const Nav: FunctionComponent = () => (
    <div className="nav">
        <Link className='nav-item' to='/shop'>
            Shop
        </Link>
        <Link className='option' to='/shop'>
            Contact
        </Link>
    </div>
)

export default Nav;
