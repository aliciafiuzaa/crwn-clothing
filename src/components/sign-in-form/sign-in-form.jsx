import { useState } from 'react';
import FormInput from '../form-input/form-input';
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import Button from '../button/button';
import './sign-in-form.scss';

const defaultFormFields = {
  email: '',
  password: '',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // async function
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    // we don't want any default behaviour in the form, all that's gonna happen inside the form we will handle it, just tell when the form is submitted
    event.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break
        case 'auth/user-not-found':
          alert('user not found');
          break
        default:
          console.log(error)
      }
      console.log(error)
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
    <div className='sign-in-form-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {/* the onSubmit callback will only run when all the validations pass */}
      {/* the names must match up with the defaultFormFields values */}
      {/* the value must match up with the formFields, which will be what the user will type */}
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;