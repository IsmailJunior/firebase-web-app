import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDoctorById } from '../doctorSlice';
const DoctorExcerpt = ( { doctorId } ) =>
{
	const doctor = useSelector( state => selectDoctorById( state, doctorId ) );
  return (
	  <div>
		  <Link to={`doctor/${doctor._id}`}>View Doctor</Link>
			<h1>{ doctor.name }</h1>		
			<h3>{ doctor.rank }</h3>
		</div>
  )
}

export default DoctorExcerpt;
