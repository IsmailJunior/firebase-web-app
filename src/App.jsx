import { Route, Routes } from 'react-router-dom';
import DoctorsList from './features/doctor/components/DoctorsList.jsx';
import Auth from './features/user/components/Auth';
import Layout from './components/Layout/Layout';
import SingleDotorPage from './features/doctor/components/SingleDoctorPage';
import CreateDoctorForm from './features/doctor/components/CreateDoctorForm';
const App = () =>
{
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={ <DoctorsList /> } />
        <Route path='/auth' element={<Auth />} />
      <Route path='doctor'>
          <Route path=':doctorId' element={ <SingleDotorPage /> } />
          <Route path='create-doctor' element={<CreateDoctorForm />} />
        </Route>
        </Route>
    </Routes>
  );
}

export default App;
