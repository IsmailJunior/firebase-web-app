import DoctorContext from "../context/doctorContext";
import { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Profiler from "../components/Profiler";

const AdminPage = () =>
{
	const DoctorContextProvider = useContext( DoctorContext );
	useEffect( () =>
	{
		DoctorContextProvider.getDoctors();
	}, [DoctorContextProvider.reload])
	return (
		<div className="my-5">
			<Table striped bordered variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Name</th>
						<th>Rank</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
			{ DoctorContextProvider.doctors.map( ( doctor, i ) =>
			{
				return (
					<tr key={ i }>
						<td>
							{i + 1}
						</td>
						<td className="justify-content-center d-flex">
							<Profiler image={doctor.image}/>
						</td>
						<td>
							<h4 className="m-4">{doctor.name}</h4>
						</td>
						<td>
							<Profiler rank={doctor.rank}/>
						</td>
						<td>
 							<Button onClick={ e => DoctorContextProvider.deleteDoctor( doctor._id ) } size="sm" variant="danger" className="rounded m-3 px-3">Delete</Button>
						</td>
					</tr>
				)
			})}
				</tbody>
			</Table>
		</div>
	)
};

export default AdminPage;