import styled from "styled-components";
import { Badge } from "react-bootstrap";
const Image = styled.img`
width: 70px;
height: 70px;
object-fit: cover;
`
const Container = styled.div`
display: flex;
align-items: center;
gap: 15px;
justify-content: space-between;
margin: 10px;
padding: 5px;
`;

const ImageContainer = styled.div`
width: 60px;
height: 60px;
overflow: hidden;
border-radius: 50%;
`;

const InfoContainer = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;
const Profiler = ( { rank ,name, image=null } ) =>
{
	return (
		<Container>
			<InfoContainer>
				{ image ? 
				<ImageContainer>
				<Image src={ image } />
			</ImageContainer>
			: null}
			<h4>{name}</h4>
			</InfoContainer>
			<h4><Badge pill bg="primary">{rank}</Badge></h4>
		</Container>
	)
};

export default Profiler;