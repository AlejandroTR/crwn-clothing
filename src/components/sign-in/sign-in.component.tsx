import React, { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

type SignInState = {
    email: string;
    password: string;
}

class SignIn extends Component<{}, SignInState> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
    }

    handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (e) {
            console.log(e)
        }
    }

    render(): ReactNode {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        id='signInEmail'
                        name='email'
                        value={email}
                        label='Email'
                        required
                        handleChange={this.handleChange} />
                    <FormInput
                        type='password'
                        id='signInPassword'
                        name='password'
                        value={password}
                        label='Password'
                        required
                        handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>
                            Sign in
                        </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} value='Submit Form' isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn
