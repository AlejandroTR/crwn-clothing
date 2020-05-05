import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { RootState } from '../../store/reducer';

import './nav.styles.scss';

const mapState = (state: RootState) => ({
    user: state.user.user,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>

const Nav: FunctionComponent<PropsFromRedux> = ({ user }) => (
    <div className="nav">
        <Link className='nav-item' to='/shop'>
            Shop
        </Link>
        <Link className='nav-item' to='/signin'>
            Contact
        </Link>
        {user ? (
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

export default connector(Nav);
