import { useSelector  } from 'react-redux';
import {selectAllDoctors, selectStatus} from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import classes from './DoctorExcerpt.module.css';
import { MoonLoader } from 'react-spinners';
import {Container} from 'react-bootstrap';

const DoctorsList = () => {

	const doctors = useSelector( selectAllDoctors );
	const status = useSelector( selectStatus );

	let content;
	
	if ( status === 'loading' )
	{
		content = 
			<Container className='d-flex flex-column align-items-center justify-content-center'>
				<MoonLoader size={30} color='white' />
			</Container>
	} else
	{
		content = doctors?.map( ( doctor ) => (
		<div className={ classes.strip } key={ doctor.id }>
			<DoctorExcerpt doctor={doctor}/>
		</div>
	))	
	}
	return (
		<div>
		{content}
		</div>
   )
};

export default DoctorsList;