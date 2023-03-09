const DoctorExcerpt = ({doctor}) => {
  return (
			<div>
			<h1>{ doctor.name }</h1>		
			<h3>{ doctor.rank }</h3>
		</div>
  )
}

export default DoctorExcerpt;
