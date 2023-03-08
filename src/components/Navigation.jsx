import { Link } from "react-router-dom";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import styled from "styled-components";
import classes from "./Navigation.module.css";
import { IoFingerPrint, IoHomeOutline, IoPersonAdd, IoLogOutOutline, IoPerson, IoLogInOutline } from "react-icons/io5";

const NavItem = styled.h5`
  margin: 7px;
  color: white;
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
   <Navbar sticky="top" className={classes.nav_background} expand="lg">
      <Container className="fs-6 fw-lighter" fluid="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-3">
            <Link className="d-flex align-items-center" to="/">
               <IoHomeOutline color="dodgerblue"/> <NavItem>Home</NavItem>
            </Link>
            { UserContextProvider.token ?
              <Link className="d-flex align-items-center mx-3" to="/admin">
               <IoFingerPrint color="dodgerblue"/> <NavItem>Admin</NavItem>
            </Link>
              : null }
            { !UserContextProvider.token && UserContextProvider.longUser ? 
            <Link className="d-flex align-items-center mx-3" to="/auth">
              <IoLogInOutline color="dodgerblue" /> <NavItem>Login</NavItem>
            </Link>
              : null }
            { !UserContextProvider.token && !UserContextProvider.longUser ? 
            <Link className="d-flex align-items-center mx-3" to="/auth">
             <IoPerson color="dodgerblue"/> <NavItem>Register</NavItem>
            </Link>
              : null }
              { UserContextProvider.token ?
              <Link className="d-flex align-items-center" to="/create-doctor">
             <IoPersonAdd color="dodgerblue"/> <NavItem>Create Doctor</NavItem>
            </Link>
              : null }
            { UserContextProvider.token ?
                <Button className="text-light" size="lg"  variant="none" onClick={UserContextProvider.logout}><IoLogOutOutline color="dodgerblue" /> Logout</Button>
              : null }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
};

export default Navigation;