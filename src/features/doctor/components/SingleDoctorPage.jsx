import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectDoctorById, deleteDoctor } from '../doctorSlice';

const SingleDoctorPage = () =>
{
	const dispatch = useDispatch();
	const { doctorId } = useParams();
	const doctor = useSelector( ( state ) => selectDoctorById( state, doctorId) );
	const navigate = useNavigate();
	const onDeleteClicked = () =>
	{
		dispatch( deleteDoctor( { id: doctorId } ) );
		navigate( '/' );
	}

	if ( !doctor )
	{
		return (
			<section>
				<h2>Doctor Not Found!</h2>
			</section>
		)
	}

  return (
	  <section>
		  <h2>{ doctor.name }</h2>
		  <h3>{ doctor.rank }</h3>
		  <button onClick={onDeleteClicked}>Delete</button>
	</section>
  )
}

export default SingleDoctorPage
