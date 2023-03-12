import {useDeleteDoctorMutation} from '../../api/doctorsApi';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import styled from 'styled-components';
const Wraper = styled.div`
	display: flex;
	align-items: center;
`
	const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
	
const Frame = styled.div`
	min-width: 60px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
`
const Profile = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;
`
const Name = styled.h3`
	margin: 0 40px;
	font-size: 1em;
`
const DoctorExcerpt = ( { doctor } ) =>
{
	const [ deleteDoctor ] = useDeleteDoctorMutation();
	const onDeleteClicked = (e) =>
	{
		e.preventDefault();
		deleteDoctor( { id: doctor._id } );
	}
	return (
		<Link to={`/doctor/${doctor._id}`}>
		<Container>
			<Wraper>
		<Frame>
				<Profile src={doctor.image} />
		</Frame>
			<Name>{doctor.name}</Name>
			</Wraper>
				
				<h4><Badge>{ doctor.rank }</Badge></h4>
				<Button variant='danger' onClick={onDeleteClicked}>Delete</Button>
			</Container>
		</Link>
  )
}

export default DoctorExcerpt;
