import {useDeleteDoctorMutation} from '../../api/doctorsApi';
import { Badge, Button } from 'react-bootstrap';
import styled from 'styled-components';
const Wraper = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
			gap: 20px;

	}

`
	const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 1000px) {
	& {
	flex-direction: column;
		gap: 20px;
		margin: 10px;
	}
}
`
	
const Frame = styled.div`
	min-width: 60px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	@media screen and (max-width: 1000px) {
	& {
		width: 100px;
		height: 100px;
	}
`
const Profile = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;

	@media screen and (max-width: 1000px) {
	& {
		width: 100px;
		height: 100px;
	}

`
const Name = styled.h3`
	margin: 0 40px;
	font-size: 1rem;
	}
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
		<Container>
			<Wraper>
		<Frame>
				<Profile src={doctor.image} />
		</Frame>
				<Name>{ doctor.name }</Name>
				<h4><Badge>{ doctor.rank }</Badge></h4>
			</Wraper>
				
				<Button variant='danger' onClick={onDeleteClicked}>Delete</Button>
			</Container>
  )
}

export default DoctorExcerpt;
