import { useEffect } from 'react';
import { useSelector  } from 'react-redux';
import {getDoctors, selectAllDoctors} from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';
import {IoLogoFirebase} from 'react-icons/io5'

const DoctorsList = () => {

	const doctors = useSelector(selectAllDoctors);

return (
	<div className='p-3 d-flex'>
		<h1>Firebase <IoLogoFirebase color='orange' /></h1>
		<div>
			{ doctors?.map( ( doctor, i ) => (
				<h1 key={i}>{doctor.name}</h1>
			))}
		</div>
	</div>
   )
};

export default DoctorsList;