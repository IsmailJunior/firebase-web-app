import { useSelector } from 'react-redux';
import { selectDoctorById } from '../doctorSlice';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
const Wraper = styled.div`
	display: flex;
	align-items: center;
`

const Frame = styled.div`
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
	color: white;
`
const DoctorExcerpt = ( { doctorId, className } ) =>
{

	const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-radius: 20px;
`
	
	const doctor = useSelector( state => selectDoctorById( state, doctorId ) );
	return (
		<Container className={className}>
			<Wraper>
		<Frame>
				<Profile src={ doctor.image } />
		</Frame>
			<Name>{ doctor.name }</Name>
			</Wraper>
			<Badge>{doctor.rank}</Badge>
	  </Container>
  )
}

export default DoctorExcerpt;
