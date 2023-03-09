import { useSelector } from 'react-redux';
import { selectAllDoctors } from './doctorSlice';

const DoctorsList = () => {
	
	const doctors = useSelector(selectAllDoctors);

	const renderDoctors = doctors.map((doctor, i) => (
		<div key={i}>
			<h1>{doctor.name}</h1>		
			<h3>{doctor.rank}</h3>
		</div>
))

return (
	<div>
	{renderDoctors}
	</div>
   )
};

export default DoctorsList;