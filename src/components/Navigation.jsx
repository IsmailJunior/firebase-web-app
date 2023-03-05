import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../userContext";
import styled from "styled-components";

const NavItem = styled.h5`
  margin: 7px;
`;
const Navigation = () =>
{
  const UserContextProvider = useContext( UserContext );
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
          : null}
            <Link to="/auth">
              <NavItem>Auth</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
};

export default Navigation;