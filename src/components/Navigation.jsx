import { Link } from "react-router-dom";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import UserContext from "../userContext";
import styled from "styled-components";

const NavItem = styled.h5`
  margin: 7px;
`;
const Navigation = () =>
{
    const UserContextProvider = useContext( UserContext );
  useEffect( () =>
  {
    UserContextProvider.setToken( UserContextProvider.Cookies.getItem( "token" ) );
    UserContextProvider.setUser( UserContextProvider.Cookies.getItem( "username" ) );
    UserContextProvider.setLongUser( UserContextProvider.Cookies.getItem( "longUser" ) );
  }, [UserContextProvider])
  return (
   <Navbar className="shadow-lg mb-5" bg="light" expand="lg">
      <Container fluid="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
                <NavItem>Home</NavItem>
            </Link>
            { UserContextProvider.token ?
              <Link to="/admin">
              <NavItem>Admin</NavItem>
            </Link>
              : null }
            { !UserContextProvider.token && UserContextProvider.longUser ? 
            <Link to="/auth">
              <NavItem>Login</NavItem>
            </Link>
              : null }
            { !UserContextProvider.token && !UserContextProvider.longUser ? 
            <Link to="/auth">
              <NavItem>Register</NavItem>
            </Link>
              : null }
              { UserContextProvider.token ?
              <Link to="/create-doctor">
              <NavItem>Create Doctor</NavItem>
            </Link>
              : null }
            { UserContextProvider.token ?
              <Button  variant="none" onClick={UserContextProvider.logout}>Logout</Button>
              : null }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
};

export default Navigation;