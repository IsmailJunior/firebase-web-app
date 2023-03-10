import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {addDoctor} from '../doctorSlice';

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
	  <div>
		  <form>
			<input value={name} onChange={onNameChanged} type="text" placeholder="Name" name="name" />
			  <input value={rank} onChange={onRankChanged} type="text" placeholder="Rank" name="rank" />
			  <input value={image} onChange={onImageChanged} type="text" placeholder="Image" name="image" />
			  <button disabled={!canSave} onClick={onSaveClicked} type="button">Save</button>
		  </form>
	</div>
  )
}

export default CreateDoctorForm;
