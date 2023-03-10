import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDoctorById } from '../doctorSlice';
import {Badge, Card, Button} from 'react-bootstrap';
const DoctorExcerpt = ( { doctorId } ) =>
{
	const doctor = useSelector( state => selectDoctorById( state, doctorId ) );
  return (
	  <Card style={{width: '18rem'}}>
		  <Card.Img variant='top' src={doctor.image} />
		  <Card.Body>
			  <Card.Title>{ doctor.name }</Card.Title>
			  <Card.Text>
				  <Badge>{doctor.rank}</Badge>
			  </Card.Text>
			  <Link to={`/doctor/${doctor._id}`}>
				<Button variant='primary'>View {doctor.name}</Button>
			  </Link>
		  </Card.Body>
	  </Card>
  )
}

export default DoctorExcerpt;
