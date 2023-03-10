import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllDoctors, getDoctorsStatus, getDoctorsError } from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';

const DoctorsList = () => {
	
	const doctors = useSelector(selectAllDoctors);
	const doctorsStatus = useSelector(getDoctorsStatus);
	const doctorsError = useSelector(getDoctorsError);

	let content;
	if ( doctorsStatus === 'loading' )
	{
		content = <p>Loading...</p>
	} else if ( doctorsStatus === 'succeeded' )
	{
		content = doctors.map((doctor, i) => <DoctorExcerpt key={i} doctor={doctor} />)
	} else if ( doctorsStatus === 'failed' )
	{
		content = <p>{doctorsError}</p>
	}

return (
	<div>
		<Link to='/doctor/create-doctor'>
			<h2>Create Doctor</h2>
		</Link>
		{content}
	</div>
   )
};

export default DoctorsList;