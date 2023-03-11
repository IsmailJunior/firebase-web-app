

import { Form, Row } from 'react-bootstrap';
import Control from '../../components/Control';
import Submit from '../../components/Submit';

const UserForm = () => {
  return (
	<Form as={ Row } >
		  <Control name='Username' placeholder='Username' id='username' />
		  <Control name='Password' placeholder='Password' id='password' type='password' />
		  <Submit>Login</Submit>
	</Form>
  )
}

export default UserForm;
