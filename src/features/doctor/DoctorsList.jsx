import {useSelector} from 'react-redux';
const DoctorsList = () => {
	
	const doctors = useSelector((state) => state.doctors);

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

