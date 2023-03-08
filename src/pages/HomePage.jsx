import { useContext, useEffect } from "react";
import DoctorContext from "../context/doctorContext";
import Profiler from "../components/Profiler";
import classes from "./Home.module.css";

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
					<div className={classes.info_section}>
						<Profiler rank={doctor.rank} name={doctor.name} image={doctor.image} key={i}/>
					</div>
				)
			})}
		</div>
	)
};

export default HomePage;