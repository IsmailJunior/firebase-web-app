import { useSelector } from 'react-redux';
import { selectDoctorsIds, getDoctorsStatus, getDoctorsError } from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';

const DoctorsList = () => {
	
	const doctors = useSelector( selectDoctorsIds );
	const doctorsStatus = useSelector(getDoctorsStatus);
	const doctorsError = useSelector( getDoctorsError );

	let content;
	if ( doctorsStatus === 'loading' )
	{
		content = <p>Loading...</p>
	} else if ( doctorsStatus === 'succeeded' )
	{
		content = doctors.map( ( doctorId, i ) => (
			<div className={classes.strip} key={doctorId}>
				<DoctorExcerpt doctorId={doctorId} />
			</div>
		))
	} else if ( doctorsStatus === 'failed' )
	{
		content = <p>{doctorsError}</p>
	}

return (
		<ListGroup className='p-3'>
			{content}
		</ListGroup>
   )
};

export default DoctorsList;