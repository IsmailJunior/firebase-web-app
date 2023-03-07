import DoctorContext from "../doctorContext";
import { useContext, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";

const AdminPage = () =>
{
	const DoctorContextProvider = useContext( DoctorContext );
	useEffect( () =>
	{
		DoctorContextProvider.getDoctors();
	}, [DoctorContextProvider.reload])
	return (
		<div>
			{ DoctorContextProvider.doctors.map( ( doctor, i ) =>
			{
				return (
					<div key={i}>
						<h4 >{ doctor.name } - <Badge>{doctor.rank}</Badge>  <Button onClick={e => DoctorContextProvider.deleteDoctor(doctor._id)} variant="danger" className="rounded-pill">Delete</Button></h4>
					</div>
				)
			})}
		</div>
	)
};

export default AdminPage;