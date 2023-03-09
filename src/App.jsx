import DoctorsList from './features/doctor/DoctorsList.jsx';
import AddDoctorForm from './features/doctor/AddDoctorForm';
const App = () =>
{
  return (
    <div>
      <AddDoctorForm />
      <DoctorsList />
    </div>
  );
}

export default App;
