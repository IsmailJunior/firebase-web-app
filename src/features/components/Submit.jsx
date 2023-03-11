
import {Button, Row, Col} from 'react-bootstrap';

const Submit = ({func, disabled, children}) => {
  return (
	  		<Row className='justify-content-md-center my-3'>
			  <Col xs lg='4' className='d-grid' >
				<Button size='sm' onClick={func} disabled={disabled} variant='secondary' type='button'>{children}</Button>
			  </Col>
		  </Row>
  )
}

export default Submit;
