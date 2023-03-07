import { createContext, useRef, useState } from "react";
import Cookies from "js-cookies";
import axios from "axios";

const UserContext = createContext( null );

export const UserContextProvider = ( { children } ) =>
{
	const [ token, setToken ] = useState( null );
	const [ longUser, setLongUser ] = useState( null );
	const [ user, setUser ] = useState( null );
	const usernameRef = useRef("");
	const passwordRef = useRef( "" );

	const register = (e) =>
	{
		 e.preventDefault();
		axios( {
		method: "POST",
		withCredentials: true,
		url: "/register",
		data: {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		}
	} ).then( ( res ) =>
	{
		console.log( Cookies.getItem( "token" ) );
		Cookies.setItem( "token", res.data.token );
		Cookies.setItem( "longUser", "20%20" );
		setToken( Cookies.getItem( "token" ) );
		if ( usernameRef.current.value !== null )
		{
			Cookies.setItem( "username", usernameRef.current.value );
			setUser( Cookies.getItem( "username" ) );
			setLongUser( Cookies.getItem( "longUser" ) );
			usernameRef.current.value = null;
			passwordRef.current.value = null;
		}
	} )
	}

	const login = (e) =>
	{
		 e.preventDefault();
		axios( {
		method: "POST",
		withCredentials: true,
		url: "/login",
		data: {
			username: usernameRef.current.value,
			password: passwordRef.current.value
		}
	} ).then( ( res ) =>
	{
		console.log( Cookies.getItem( "token" ) );
		Cookies.setItem( "token", res.data.token );
		setToken( Cookies.getItem( "token" ) );
		if ( usernameRef.current.value !== null )
		{
			Cookies.setItem( "username", usernameRef.current.value );
			setUser( Cookies.getItem( "username" ) );
			usernameRef.current.value = null;
			passwordRef.current.value = null;
		}
	} )
	}
		const logout = (e) =>
	{
		 e.preventDefault();
		axios( {
		method: "GET",
		withCredentials: true,
			url: "/logout",
	} ).then( ( res ) =>
	{
		console.log( res.data );
		Cookies.removeItem( "token" );
		Cookies.removeItem( "username" );
		window.location.reload();
	} )
	}

	const context = {
		register,
		login,
		logout,
		usernameRef,
		passwordRef,
		token,
		setToken,
		setUser,
		user,
		setLongUser,
		longUser,
		Cookies
	}
	
	return (
		<UserContext.Provider value={context}>
			{children}
		</UserContext.Provider>
	)
		
};

export default UserContext;