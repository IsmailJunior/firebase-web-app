import { Form, Col, Row, Button } from "react-bootstrap";
import UserContext from "../context/userContext";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import classes from "./AuthPage.module.css";

const AuthPage = () =>
{	
	const [switchAuth, setSwitchAuth] = useState(null)
	const UserContextProvider = useContext( UserContext );

	const switchPage = () => 
	{
		if ( !switchAuth )
		{
		UserContextProvider.Cookies.setItem( "longUser", "20%20" );
		setSwitchAuth(UserContextProvider.Cookies.getItem("longUser"))
		} else
		{
		UserContextProvider.Cookies.removeItem( "longUser" );
		setSwitchAuth(null)
		}
	}

	useEffect( () =>
	{
		setSwitchAuth( UserContextProvider.Cookies.getItem( "longUser" ) );
	}, [])
	return (
		<Form className={classes.container}>
			{ UserContextProvider.token ?
				<Navigate to="/" />
				: null }
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
				<Form.Group className="mb-3">
				<Form.Label htmlFor="username">Username</Form.Label>
				<Form.Control className={classes.input} ref={UserContextProvider.usernameRef} required type="email" id="username" placeholder="name@example.com"/>
			</Form.Group>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col xs lg={4}>
				<Form.Group className="mb-3">
				<Form.Label htmlFor="password">Password</Form.Label>
				<Form.Control className={classes.input} ref={UserContextProvider.passwordRef} required type="password" id="password"/>
				</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={ 4 }>
					<div className="d-grid">
						{ switchAuth ? 
						<Button className={classes.button} variant="secondary" size="sm" type="submit" onClick={UserContextProvider.login}>Login</Button>
					
				: <Button  className={classes.button} variant="secondary" size="sm" type="submit" onClick={UserContextProvider.register}>Register</Button>	}
					</div>
					{ switchAuth ?
					<div className="d-flex align-items-center mt-4 gap-2">
						<h5>Don't have account?</h5> <Button className="text-light" variant="none" onClick={switchPage}>Register</Button>
					</div>
				: 	<div className="d-flex align-items-center mt-4 gap-2">
						<h5>Have account?</h5> <Button className="text-light" variant="none" onClick={switchPage}>Login</Button>
						</div> }
				</Col>
			</Row>
		</Form>
	)
};

export default AuthPage;