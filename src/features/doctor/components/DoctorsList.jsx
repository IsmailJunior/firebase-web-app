import {useGetDoctorsQuery} from '../../api/doctorsApi';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';

const DoctorsList = () => {

	const { data: doctors } = useGetDoctorsQuery();
	let content;
		content = doctors?.map( ( doctor ) => (
		<div className={ classes.strip } key={ doctor._id }>
			<DoctorExcerpt doctor={doctor}/>
		</div>
	))	
return (
	<ListGroup className='p-3'>
		{ content }
	</ListGroup>
   )
};

export default DoctorsList;