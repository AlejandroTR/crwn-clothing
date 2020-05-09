import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

import './custon-button.styles.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    inverted?: boolean;
    isGoogleSignIn?: boolean;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
    children,
    inverted,
    isGoogleSignIn,
    ...props
}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`}
        {...props}
    >
        {children}
    </button>
);

export default CustomButton;
