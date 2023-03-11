import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addDoctor } from '../doctorSlice';

const CreateDoctorForm = () =>
{
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const [ image, setImage ] = useState( '' );
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ requestStatus, setRequestStatus ] = useState( 'idle' );

	const canSave = [ name, rank, image ].every( Boolean ) && requestStatus === 'idle';
	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );
	const onImageChanged = e => setImage( e.target.value );

	const onSaveClicked = () =>
	{
		if (canSave)
		{
			try
			{
			setRequestStatus( 'pending' );
				dispatch( addDoctor( { name: name, rank: rank, image: image} ) ).unwrap();
				setName( '' );
				setRank( '' );
				setImage( '' );
				navigate( '/' );
			} catch ( error )
			{
				console.error( 'Error:' + error );
			} finally
			{
				setRequestStatus( 'idle' );
			}
		}
	}

  return (
	  <Form as={Row} className='justify-content-md-center'>
		  <Row className='justify-content-md-center'>
			<Form.Group xs lg='4' as={Col} className='mb-3' controlId='name'>
			  <Form.Label>Name</Form.Label>
			  <Form.Control size='sm' onChange={onNameChanged} value={name} id='name' type='text' placeholder='Enter Name' />
			  </Form.Group>
		  </Row>
		  <Row className='justify-content-md-center'>
			<Form.Group xs lg='4' as={Col} className='mb-3' controlId='rank'>
			  <Form.Label>Rank</Form.Label>
			  <Form.Control size='sm' onChange={onRankChanged} value={rank} id='rank' type='text' placeholder='Enter Rank'/>
		  	</Form.Group>
		  </Row>

		  <Row className='justify-content-md-center'>
				<Form.Group xs lg='4' as={Col} className='mb-3' controlId='image'>
			  <Form.Label>Image</Form.Label>
			  <Form.Control size='sm' onChange={onImageChanged} value={image} id='image' type='text' placeholder='Enter Image' />
		  </Form.Group>
		  </Row>
		  <Row className='justify-content-md-center'>
			  <Col xs lg='4' className='d-grid' >
				<Button size='sm' onClick={onSaveClicked} disabled={!canSave} variant='secondary' type='button'>Submit</Button>
			  </Col>
		  </Row>
	</Form>
  )
}

export default CreateDoctorForm;
