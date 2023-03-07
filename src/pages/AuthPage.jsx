import { Form, Col, Row, Button } from "react-bootstrap";
import UserContext from "../userContext";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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
		<Form>
			{ UserContextProvider.token ?
				<Navigate to="/" />
				: null }
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
				<Form.Group className="mb-3">
				<Form.Label htmlFor="username">Username</Form.Label>
				<Form.Control ref={UserContextProvider.usernameRef} required type="email" id="username" placeholder="name@example.com"/>
			</Form.Group>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col xs lg={4}>
				<Form.Group className="mb-3">
				<Form.Label htmlFor="password">Password</Form.Label>
				<Form.Control ref={UserContextProvider.passwordRef} required type="password" id="password"/>
				</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={ 4 }>
					<div className="d-grid">
						{ switchAuth ? 
						<Button className="align-self-start" variant="success" size="lg" type="submit" onClick={UserContextProvider.login}>Login</Button>
					
				: <Button className="align-self-start" variant="success" size="lg" type="submit" onClick={UserContextProvider.register}>Register</Button>	}
					</div>
					{ switchAuth ?
					<div className="d-flex align-items-center mt-4 gap-2">
						<h5>Don't have account?</h5> <Button variant="none" onClick={switchPage}>Register</Button>
					</div>
				: 	<div className="d-flex align-items-center mt-4 gap-2">
						<h5>Have account?</h5> <Button variant="none" onClick={switchPage}>Login</Button>
						</div> }
				</Col>
			</Row>
		</Form>
	)
};

export default AuthPage;