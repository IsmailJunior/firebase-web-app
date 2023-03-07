import { Form, Col, Row, Button } from "react-bootstrap";
import DoctorContext from "../doctorContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const CreateDoctorPage = () =>
{
	const DoctorContextProvider = useContext( DoctorContext );
	return (
		<Form>
			{ DoctorContextProvider.isPostingComplete ?
				[<Navigate to ="/"/>, DoctorContextProvider.setIsPostingComplete(false)]
		: null}
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="name">Doctor Name</Form.Label>
						<Form.Control ref={DoctorContextProvider.nameRef} required type="text" id="name"/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="rank">Doctor Rank</Form.Label>
						<Form.Control ref={DoctorContextProvider.rankRef} required type="text" id="rank"/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={ 4 }>
					<div className="d-grid">
						<Button variant="primary" size="md" type="submit" onClick={DoctorContextProvider.createDoctor}>Create Doctor</Button>
					</div>
				</Col>
			</Row>
		</Form>
	)
};

export default CreateDoctorPage;