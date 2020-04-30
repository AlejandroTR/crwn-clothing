import React, { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

type SignInState = {
    email: string;
    password: string;
}

class SignIn extends Component<{}, SignInState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event: FormEvent)  => {
        event.preventDefault();
        
        this.setState({ email: '', password: '' })
    }
    
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        
        this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>)
    }
    
    render(): ReactNode {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        id='email'
                        name='email'
                        value={this.state.email}
                        label='email'
                        required
                        handleChange={this.handleChange} />
                    <FormInput
                        type='password'
                        id='password'
                        name='password'
                        value={this.state.password}
                        label='password'
                        required
                        handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type='submit' value='Submit Form'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} value='Submit Form' isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn
