import {Form, Row, Col} from 'react-bootstrap';
import classes from './Control.module.css';
const Control = ({name, func, value, placeholder, id, type='text'}) => {
  return (
	<Row className='justify-content-md-center'>
	<Form.Group xs lg='4' as={Col} className='mb-3' controlId={id}>
	 <Form.Label>{name}</Form.Label>
	 <Form.Control className={classes.control} size='sm' onChange={func} value={value} type={type} placeholder={placeholder} />
	 </Form.Group>
	</Row>
  )
}

export default Control;
