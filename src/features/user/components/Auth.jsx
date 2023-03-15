import { useState } from 'react';
import { auth} from '../../../config/firebase';
import { useDispatch } from 'react-redux';
import {signIn, signInGoogle,signUp, logOut} from '../authSlice'
import {useNavigate} from 'react-router-dom';
import { Form, Row } from 'react-bootstrap';
import {IoLogoGoogle} from 'react-icons/io5';
import Control from '../../components/Control';
import Submit from '../../components/Submit';

const Auth = () =>
{
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ email, setEmail ] = useState( '' );
	const [ password, setPassword ] = useState( '' );

	const onEmailChanged = e => setEmail( e.target.value );
	const onPasswordChanged = e => setPassword( e.target.value );

	const canSave = [email, password].every(Boolean)

	console.log( auth?.currentUser?.email );	
	const onSignUpClicked = ( e ) =>
	{
		e.preventDefault();
		if ( canSave )
		{
			dispatch( signUp( { email: email, password: password } ) );
			console.log( auth.currentUser );
		}
		setEmail( '' );
		setPassword( '' );
		navigate('/')
	}

	const onLoginWithGoogleClicked = async (e) =>
	{
		e.preventDefault();
		if ( canSave)
		{
			dispatch( signInGoogle() );
				setEmail( '' );
				setPassword( '' );
				navigate( '/' );
		}
	}

	const onLoginClicked = (e) =>
	{
		e.preventDefault();
		if ( canSave )
		{
			dispatch( signIn( { email: email, password: password } ) );
		}
		setEmail( '' );
		setPassword( '' );
		navigate('/')
	}

	const onLogoutClicked = (e) =>
	{
		e.preventDefault();
		dispatch( logOut() );
		navigate( '/' );
	}

	const Authcontrols = ( !auth.currentUser ?
		<div>
		<Control func={onEmailChanged} name='Email' placeholder='example@mail.com' type='email' value={email} />
		  <Control func={onPasswordChanged} name='Password' placeholder='Password' type='password' value={password} />
			<Submit func={ onSignUpClicked } disabled={ !canSave }>Sign Up</Submit>
			<Submit func={ onLoginClicked } disabled={ !canSave }>Login</Submit>
		  <Submit func={onLoginWithGoogleClicked}><IoLogoGoogle />Login with Google</Submit>
		</div>
		: <Submit func={onLogoutClicked}>Logout</Submit>
	)

  return (
	  <Form as={ Row }>
		{Authcontrols}
	  </Form>
  )
}

export default Auth;
