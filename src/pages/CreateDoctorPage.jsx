import { Form, Col, Row, Button } from "react-bootstrap";
import DoctorContext from "../context/doctorContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import classes from "./CreateDoctorPage.module.css";
const CreateDoctorPage = () =>
{
	const DoctorContextProvider = useContext( DoctorContext );
	return (
		<Form className={classes.container}>
			{ DoctorContextProvider.isPostingComplete ?
				[<Navigate to ="/"/>, DoctorContextProvider.setIsPostingComplete(false)]
		: null}
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
					<Form.Group>
						<Form.Label htmlFor="name">Doctor Name</Form.Label>
						<Form.Control placeholder="Username" className={classes.input} ref={DoctorContextProvider.nameRef} required type="text" id="name"/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
					<Form.Group>
						<Form.Label htmlFor="rank">Doctor Rank</Form.Label>
						<Form.Control placeholder="Rank" className={classes.input} ref={DoctorContextProvider.rankRef} required type="text" id="rank"/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={4}>
					<Form.Group>
						<Form.Label htmlFor="image">Doctor Image</Form.Label>
						<Form.Control placeholder="Image" className={classes.input} ref={DoctorContextProvider.imageRef} required type="text" id="image"/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs lg={ 4 }>
					<div className="d-grid">
						<Button className={classes.button} variant="secondary" size="sm" type="submit" onClick={DoctorContextProvider.createDoctor}>Create Doctor</Button>
					</div>
				</Col>
			</Row>
		</Form>
	)
};

export default CreateDoctorPage;