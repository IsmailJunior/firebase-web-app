import {Form, Row, Col} from 'react-bootstrap';

const Control = ({name, func, value, placeholder, id}) => {
  return (
	<Row className='justify-content-md-center'>
	<Form.Group xs lg='4' as={Col} className='mb-3' controlId={id}>
	 <Form.Label>{name}</Form.Label>
	 <Form.Control size='sm' onChange={func} value={value} type='text' placeholder={placeholder} />
	 </Form.Group>
	</Row>
  )
}

export default Control;
