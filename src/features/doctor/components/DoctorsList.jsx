import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDoctorsIds, getDoctorsStatus, getDoctorsError } from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';

const DoctorsList = () => {
	
	const doctors = useSelector( selectDoctorsIds );
	const doctorsStatus = useSelector(getDoctorsStatus);
	const doctorsError = useSelector(getDoctorsError);

	let content;
	if ( doctorsStatus === 'loading' )
	{
		content = <p>Loading...</p>
	} else if ( doctorsStatus === 'succeeded' )
	{
		content = doctors.map((doctorId, i) => <DoctorExcerpt key={i} doctorId={doctorId} />)
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