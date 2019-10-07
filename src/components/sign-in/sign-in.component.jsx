import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{//class component coz we have to store user input 
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    render(){
        return(
        <div className='sign-in'>
            <h2>Already Got an Account</h2>
            <span>Access via email & password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label="email"
                    required
                    />
                <FormInput
                    name="password" 
                    type="password" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="password"
                    required/>

                <div className='buttons'>
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {' '}
                    sign in with google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;