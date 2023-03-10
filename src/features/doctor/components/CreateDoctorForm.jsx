import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {addDoctor} from '../doctorSlice';

const CreateDoctorForm = () =>
{
	const [name, setName] = useState('')
    const [rank, setRank] = useState('')
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ requestStatus, setRequestStatus ] = useState( 'idle' );

	const canSave = [ name, rank ].every( Boolean ) && requestStatus === 'idle';
	const onNameChanged = e => setName( e.target.value );
	const onRankChanged = e => setRank( e.target.value );

	const onSaveClicked = () =>
	{
		if (canSave)
		{
			try
			{
			setRequestStatus( 'pending' );
				dispatch( addDoctor( { name: name, rank: rank} ) ).unwrap();
				setName( '' );
				setRank( '' );
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
	  <div>
		  <form>
			<input value={name} onChange={onNameChanged} type="text" placeholder="Name" name="name" />
			  <input value={rank} onChange={onRankChanged} type="text" placeholder="Rank" name="rank" />
			  <button disabled={!canSave} onClick={onSaveClicked} type="button">Save</button>
		  </form>
	</div>
  )
}

export default CreateDoctorForm;
