import { createContext, useRef, useState } from "react";
import Cookies from "js-cookies";
import axios from "axios";

const UserContext = createContext( null );

export const UserContextProvider = ( { children } ) =>
{
	const [ token, setToken ] = useState( null );
	const [ user, setUser ] = useState( null );
	const usernameRef = useRef("");
	const passwordRef = useRef("");

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
		setToken( Cookies.getItem( "token" ) );
		if ( usernameRef.current.value !== null )
		{
			Cookies.setItem( "username", usernameRef.current.value );
			setUser( Cookies.getItem( "username" ) );
		}
	} )
	}

	const context = {
		register,
		usernameRef,
		passwordRef,
		token,
		setToken,
		setUser,
		user,
		Cookies
	}
	
	return (
		<UserContext.Provider value={context}>
			{children}
		</UserContext.Provider>
	)
		
};

export default UserContext;