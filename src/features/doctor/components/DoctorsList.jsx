import {useGetDoctorsQuery} from '../../api/doctorsApi';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';

const DoctorsList = () => {


	const { data: doctors } = useGetDoctorsQuery();

	let content = doctors?.map( ( doctor ) => (
		<DoctorExcerpt doctor={doctor}/>
	))
return (
	<ListGroup className='p-3'>
		{content}
		</ListGroup>
   )
};

export default DoctorsList;