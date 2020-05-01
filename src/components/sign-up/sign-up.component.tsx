import React, {ChangeEvent, Component, FormEvent, ReactNode} from 'react';

import { User } from 'firebase';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

type SignUpState = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

class SignUp extends Component<any, SignUpState>{
    constructor(props: any) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>)
    }

    handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user as User, { displayName });
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (e) {
            console.error(e);
        }
    }

    render(): ReactNode {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        id='signUpDisplayName'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='email'
                        id='signUpEmail'
                        name='email'
                        value={email}
                        label='Email'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        id='signUpPassword'
                        name='password'
                        value={password}
                        label='Password'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='confirmPassword'
                        id='signUpConfirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                        handleChange={this.handleChange}
                    />
                    <CustomButton type='submit'>
                        Sign up
                    </CustomButton>
                </form>
            </div>

        );
    }
}

export default SignUp;
