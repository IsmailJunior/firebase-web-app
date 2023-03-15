import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor, selectStatus } from '../doctorSlice';
import { Form, Row } from 'react-bootstrap';
import Control from '../../components/Control';
import Submit from '../../components/Submit';
import {MoonLoader} from 'react-spinners'

const CreateDoctorForm = () =>
{
	const status = useSelector(selectStatus)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const [ image, setImage ] = useState( '' );

	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );
	const onImageChanged = e => setImage( e.target.files[0] );
	const canSave = [name, rank, image].every(Boolean)

	let label;

	if ( status === 'success' )
	{
		label = 'Save';
	} else if ( status === 'loading' )
	{
		label = 'Loading'
	} else if ( status === 'idle' )
	{
		label = 'Idle'
	}

	const onSaveClicked = ( e ) =>
	{
		e.preventDefault();
		if ( canSave )
		{
		dispatch( addDoctor({name: name, rank: rank, image}) )
		setName( '' );
		setRank( '' );
		setImage( '' );
		
		}
	}

	const controlSeed = [
		{name: 'Name', func: onNameChanged, value: name, placeholder: 'Enter Name', id: 'name'},
		{name: 'Rank', func: onRankChanged, value: rank, placeholder: 'Enter Rank', id: 'rank'},
		{name: 'image', func: onImageChanged,  placeholder: 'Enter Image', id: 'image', type: 'file'},
	]

	const controls = controlSeed.map( ( control ) => (
		<Control type={control.type} value={control.value}  key={control.id} name={control.name} func={control.func} placeholder={control.placeholder} id={control.id} />
	))

  return (
	  <Form as={ Row } className='justify-content-md-center'>
		  {controls}
		<Submit func={onSaveClicked} disabled={!canSave}>{label}</Submit>
	</Form>
  )
}

export default CreateDoctorForm;
