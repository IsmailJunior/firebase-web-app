import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
	<Navbar sticky='top' variant='dark' bg='dark' expand='lg'>
	<Container>
			  <Navbar.Brand>Center</Navbar.Brand>
			  <Navbar.Toggle aria-controls="navbar-nav" />
			  <Navbar.Collapse id='navbar-nav'>
				  <Nav className='gap-3'>
					  <Link to='/'>
						  <Nav>Home</Nav>
					  </Link>
						<Link to='/doctor/create-doctor'>
						  <Nav>Create Doctor</Nav>
					  </Link>
					  	<Link to='/login'>
						  <Nav>Login</Nav>
					  </Link>
				  </Nav>
			  </Navbar.Collapse>
	</Container>
	</Navbar>
  )
}

export default Navigation;
