import DoctorExcerpt from './DoctorExcerpt';
import { ListGroup } from 'react-bootstrap';
import classes from './DoctorExcerpt.module.css';
import {IoLogoFirebase} from 'react-icons/io5'

const DoctorsList = () => {

return (
	<div className='p-3 d-flex'>
		<h1>Firebase <IoLogoFirebase color='orange'/></h1>
	</div>
   )
};

export default DoctorsList;