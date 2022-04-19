import { useState } from 'react';
import FormInput from '../form-input/form-input';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button';
import './sign-up-form.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    // we don't want any default behaviouur in the form, all that's gonna happen inside the form we will handle it, just tell when the form is submitted
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log("user creation encountered an error", error);
      }
    }

    // confirm the password matches confirmPassword

    // see if we authenticated the user with email and passworkd
    // we want to create a user document from what the createauthuser returns
  }

  const handleChange = (event) => {
    // target is gonna give us the input, which is the one emiting the event, will give us everything that is attached to the input (name, email, etc)
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      {/* the onSubmit callback will only run when all the validations pass */}
      {/* the names must match up with the defaultFormFields values */}
      {/* the value must match up with the formFields, which will be what the user will type */}
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />

        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

        <FormInput label='Confirm Password' type='password' required onChange={handleChange}  name='confirmPassword' value={confirmPassword} />

        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;