import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addDoctor } from './doctorSlice';

const AddDoctorForm = () =>
{
	const dispatch = useDispatch();
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );

	const onSaveButtonClicked = () =>
	{
		if ( name && rank )
		{
			dispatch(
				addDoctor( name, rank )
			)
			setName( '' );
			setRank( '' );
		}
	}

  return (
	<form>
		  <label htmlFor="name">Name</label>
		  <input onChange={onNameChanged} value={name} name='name' type="text" id="name" />
			<label htmlFor="rank">Rank</label>
		  <input onChange={onRankChanged} value={rank} name='rank' type="text" id="rank" />
		  <button onClick={onSaveButtonClicked} type="button">Save</button>
	</form>
  )
}

export default AddDoctorForm;
