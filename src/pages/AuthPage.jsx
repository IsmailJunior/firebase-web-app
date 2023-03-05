import { Form, Col, Row, Button } from "react-bootstrap";
import UserContext from "../userContext";
import { useContext, useEffect } from "react";

const AuthPage = () =>
{	
	const UserContextProvider = useContext( UserContext );
	useEffect( () =>
	{
		UserContextProvider.setToken( UserContextProvider.Cookies.getItem( "token" ) );
		UserContextProvider.setUser( UserContextProvider.Cookies.getItem( "username" ) );
	}, [UserContextProvider])
	return (
		<Form>
			{ UserContextProvider.token ?
				<h1>Weclome {UserContextProvider.user}</h1>
		: null}
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
						<Button className="align-self-start" variant="success" size="lg" type="submit" onClick={UserContextProvider.register}>Register</Button>
					</div>
				</Col>
			</Row>
		</Form>
	)
};

export default AuthPage;