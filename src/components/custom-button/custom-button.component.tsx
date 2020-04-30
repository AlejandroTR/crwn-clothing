import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

import './custon-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isGoogleSignIn?: boolean;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ children, isGoogleSignIn, ...props }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
);

export default CustomButton
