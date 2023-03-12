import { useAddDoctorMutation } from '../../api/doctorsApi';
import {useState} from 'react';
import { Form, Row } from 'react-bootstrap';
import Control from '../../components/Control';
import Submit from '../../components/Submit';

const CreateDoctorForm = () =>
{
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const [ image, setImage ] = useState( '' );

	const [ addDoctor ] = useAddDoctorMutation();

	const onSaveClicked = ( e ) =>
	{
		e.preventDefault();
		addDoctor({})
	}

	const controlSeed = [
		{name: 'Name', func: null, value: null, placeholder: 'Enter Name', id: 'name'},
		{name: 'Rank', func: null, value: null, placeholder: 'Enter Rank', id: 'rank'},
		{name: 'Image', func: null, value: null, placeholder: 'Enter Image', id: 'image'},
	]

	const controls = controlSeed.map( ( control ) => (
		<Control key={control.id} name={control.name} func={control.func} placeholder={control.placeholder} id={control.id} />
	))

  return (
	  <Form as={Row} className='justify-content-md-center'>
		  {null}
		<Submit func={null} disabled={null}>Save</Submit>
	</Form>
  )
}

export default CreateDoctorForm;
