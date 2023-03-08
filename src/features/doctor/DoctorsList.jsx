import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getDoctors} from './doctorSlice.js';
const DoctorsList = () => {
	
	const doctors = useSelector((state) => state.doctors);
	const dispatch = useDispatch();

	const renderDoctors = doctors.map((doctor) => (
		<div key={doctor.id}>
			<h1>{doctor.name}</h1>		
			<h3>{doctor.rank}</h3>
		</div>
))

useEffect(() => {
	dispatch(getDoctors());
},[])

return (
	<div>
	{renderDoctors}
	</div>
   )
};

export default DoctorsList;

