import {Link} from 'react-router-dom'
const DoctorExcerpt = ( { doctor } ) =>
{
  return (
	  <div>
		  <Link to={`doctor/${doctor._id}`}>View Doctor</Link>
			<h1>{ doctor.name }</h1>		
			<h3>{ doctor.rank }</h3>
		</div>
  )
}

export default DoctorExcerpt;
