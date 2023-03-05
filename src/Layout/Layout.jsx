import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
const Layout = ( { children } ) =>
{
	return (
		<div>
		<Navigation />
		<Container>
					{children}
		</Container>
		</div>
	)
};

export default Layout;