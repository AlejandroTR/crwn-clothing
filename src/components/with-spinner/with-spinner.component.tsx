import React, { ComponentType, FunctionComponent } from 'react';

import './with-spinner.styles.scss';

interface WithSpinnerProps {
    isLoading: boolean
}

const WithSpinner = <P extends object>(WrappedComponent: ComponentType<P>): FunctionComponent<P & WithSpinnerProps> =>
    ({ isLoading, ...otherProps }: WithSpinnerProps) => (
        isLoading? (
            <div className='spinner-overlay'>
                <div className='spinner-container'></div>
            </div>
        ) : (
            <WrappedComponent {...(otherProps as P)} />
        )
    );

export default WithSpinner;
