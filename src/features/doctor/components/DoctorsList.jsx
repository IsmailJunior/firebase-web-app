import { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {getDoctors, selectAllDoctors} from '../doctorSlice';
import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';
import {IoLogoFirebase} from 'react-icons/io5'

const DoctorsList = () => {

	// const doctors = useSelector( selectAllDoctors );
	const dispatch = useDispatch();
	useEffect( () =>
	{
		dispatch( getDoctors() );
	}, [dispatch])
return (
	<div className='p-3 d-flex'>
		<h1>Firebase <IoLogoFirebase color='orange'/></h1>
	</div>
   )
};

export default DoctorsList;