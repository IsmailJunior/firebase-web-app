import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import {Container} from 'react-bootstrap';
const Layout = () => {
	return (
	<>
	<Navigation />
	<Container className='my-5'>
	<Outlet />
	</Container>
	</>
  )
}

export default Layout;
