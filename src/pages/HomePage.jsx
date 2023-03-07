import { useContext, useEffect } from "react";
import DoctorContext from "../doctorContext";

const HomePage = () =>
{
	const DoctorContextProvider = useContext( DoctorContext );

	useEffect( () =>
	{
		DoctorContextProvider.getDoctors();
	}, [])
	return (
		<div>
			{ DoctorContextProvider.doctors.map( ( doctor, i ) =>
			{
				return (
					<div key={i}>
						<h1>{ doctor.name } - {doctor.rank}</h1>
					</div>
				)
			})}
		</div>
	)
};

export default HomePage;