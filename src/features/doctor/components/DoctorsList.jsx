import { useSelector  } from 'react-redux';
import {selectAllDoctors} from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';
import {IoLogoFirebase} from 'react-icons/io5'

const DoctorsList = () => {

	const doctors = useSelector(selectAllDoctors);

		let content;
		content = doctors?.map( ( doctor ) => (
		<div className={ classes.strip } key={ doctor.id }>
			<DoctorExcerpt doctor={doctor}/>
		</div>
	))	
return (
	<ListGroup className='p-3'>
		<h1>Powered By Firebase <IoLogoFirebase color='orange' /></h1>
		{content}
	</ListGroup>
   )
};

export default DoctorsList;