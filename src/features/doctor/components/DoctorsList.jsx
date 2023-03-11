import { useSelector } from 'react-redux';
import { selectDoctorsIds, getDoctorsStatus, getDoctorsError } from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';

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
		content = doctors.map( ( doctorId, i ) => (
			<ListGroup.Item key={doctorId}>
				<DoctorExcerpt doctorId={doctorId} className={classes.strip} />
			</ListGroup.Item>
		))
	} else if ( doctorsStatus === 'failed' )
	{
		content = <p>{doctorsError}</p>
	}

return (
	<div>
		<ListGroup>
			{content}
		</ListGroup>
	</div>
   )
};

export default DoctorsList;