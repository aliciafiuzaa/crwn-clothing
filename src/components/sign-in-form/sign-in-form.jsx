import { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    // we don't want any default behaviour in the form, all that's gonna happen inside the form we will handle it, just tell when the form is submitted
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // i want to set current user whenever the user value above comes back
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    // target is gonna give us the input, which is the one emiting the event, will give us everything that is attached to the input (name, email, etc)
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-form-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {/* the onSubmit callback will only run when all the validations pass */}
      {/* the names must match up with the defaultFormFields values */}
      {/* the value must match up with the formFields, which will be what the user will type */}
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;