import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor } from './doctorSlice';
import {selectAllUsers} from '../users/usersSlice';

const AddDoctorForm = () =>
{
	const users = useSelector( selectAllUsers );
	const dispatch = useDispatch();
	const [ userId, setUserId ] = useState( '' );
	const [ name, setName ] = useState( '' );
	const [ rank, setRank ] = useState( '' );
	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );
	const onAuthorhanged = e => setUserId( e.target.value );

	const onSaveButtonClicked = () =>
	{
		if ( name && rank )
		{
			dispatch(
				addDoctor( name, rank, userId )
			)
			setName( '' );
			setRank( '' );
		}
	}

	const canSave = Boolean( name ) && Boolean( rank ) && Boolean( userId );
	const usersOptions = users.map( user => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	))

  return (
	<form>
		  <label htmlFor="name">Name</label>
		  <input onChange={ onNameChanged } value={ name } name='name' type="text" id="name" />
		  <label htmlFor="author">Author:</label>
		  <select id='author' value={ userId } onChange={ onAuthorhanged }>
			  {usersOptions}
		  </select>
			<label htmlFor="rank">Rank</label>
		  <input onChange={onRankChanged} value={rank} name='rank' type="text" id="rank" />
		  <button disabled={!canSave} onClick={onSaveButtonClicked} type="button">Save</button>
	</form>
  )
}

export default AddDoctorForm;
