import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { Form, Row } from 'react-bootstrap';
import Control from '../../components/Control';
import Submit from '../../components/Submit';

const CreateDoctorForm = () =>
{
	const navigate = useNavigate();
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const [ image, setImage ] = useState( '' );

	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );
	const onImageChanged = e => setImage( e.target.value );
	const canSave = [name, rank, image].every(Boolean)

	const onSaveClicked = ( e ) =>
	{
		e.preventDefault();
		if ( canSave )
		{
		setName( '' );
		setRank( '' );
		setImage( '' );
		navigate( '/' );
		}
	}

	const controlSeed = [
		{name: 'Name', func: onNameChanged, value: name, placeholder: 'Enter Name', id: 'name'},
		{name: 'Rank', func: onRankChanged, value: rank, placeholder: 'Enter Rank', id: 'rank'},
		{name: 'image', func: onImageChanged, value: image, placeholder: 'Enter Image', id: 'image'},
	]

	const controls = controlSeed.map( ( control ) => (
		<Control key={control.id} name={control.name} func={control.func} placeholder={control.placeholder} id={control.id} />
	))

  return (
	  <Form as={ Row } className='justify-content-md-center'>
		  {controls}
		<Submit func={onSaveClicked} disabled={!canSave}>Save</Submit>
	</Form>
  )
}

export default CreateDoctorForm;
