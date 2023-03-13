import { useState } from 'react';
import { auth, googleProvider } from '../../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { Form, Row } from 'react-bootstrap';
import {IoLogoGoogle} from 'react-icons/io5';
import Control from '../../components/Control';
import Submit from '../../components/Submit';

const Auth = () =>
{
	const navigate = useNavigate();
	const [ email, setEmail ] = useState( '' );
	const [ password, setPassword ] = useState( '' );

	const onEmailChanged = e => setEmail( e.target.value );
	const onPasswordChanged = e => setPassword( e.target.value );

	const canSave = [email, password].every(Boolean)

	console.log( auth?.currentUser?.email )
	
	const onSignUpClicked = async (e) =>
	{
		e.preventDefault();
		if ( canSave )
		{
			try
			{
				await createUserWithEmailAndPassword( auth, email, password );
			} catch ( error )
			{
				console.error(error.message)
			}
			console.log( password )
			setEmail( '' );
			setPassword( '' );
			navigate( '/' );
		}
	}

	const onLoginWithGoogleClicked = async (e) =>
	{
		e.preventDefault();
		if ( canSave )
		{
			try
			{
				await signInWithPopup( auth, googleProvider );
			} catch ( error )
			{
				console.error(error.message)
			}
			console.log( password )
			setEmail( '' );
			setPassword( '' );
			navigate( '/' );
		}
	}

	const onLoginClicked = async (e) =>
	{
		e.preventDefault();
		if ( canSave )
		{
			try
			{
				await signInWithEmailAndPassword( auth, email, password );
				navigate( '/' );
			} catch ( error )
			{
				console.error(error.message)
			}
			console.log( password )
			setEmail( '' );
			setPassword( '' );
		}
	}
	const onLogoutClicked = async (e) =>
	{
		e.preventDefault();
			try
			{
				await signOut( auth);
				navigate( '/' );
			} catch ( error )
			{
				console.error(error.message)
			}
	}

  return (
	  <Form as={Row}>
		  <Control func={onEmailChanged} name='Email' placeholder='example@mail.com' type='email' value={email} />
		  <Control func={onPasswordChanged} name='Password' placeholder='Password' type='password' value={password} />
		  <Submit func={onSignUpClicked} disabled={!canSave}>Sign Up</Submit>
		  <Submit func={onLoginWithGoogleClicked} disabled={!canSave}><IoLogoGoogle /> Login with Google</Submit>
		  <Submit func={onLoginClicked} disabled={!canSave}>Login</Submit>
		  <Submit func={onLogoutClicked}>Logout</Submit>
	  </Form>
  )
}

export default Auth;
