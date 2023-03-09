import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAllDoctors, getDoctorsStatus, getDoctorsError, fetchDoctors } from './doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';

const DoctorsList = () => {
	
	const doctors = useSelector(selectAllDoctors);
	const doctorsStatus = useSelector(getDoctorsStatus);
	const doctorsError = useSelector(getDoctorsError);
	const dispatch = useDispatch();

	useEffect( () =>
	{
		if ( doctorsStatus === 'idle' )
		{
			dispatch( fetchDoctors() );
		}
	}, [doctorsStatus, dispatch])
	
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
		{content}
	</div>
   )
};

export default DoctorsList;