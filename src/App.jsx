import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CreateDoctorPage from "./pages/CreateDoctorPage";
import { Route, Routes} from "react-router-dom";
const App = () =>
{
  return (
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin"  element={<AdminPage />} />
        <Route path="/auth"  element={<AuthPage />} />
        <Route path="/create-doctor" element={<CreateDoctorPage />} />
      </Routes>
      </Layout>
  );
}

export default App;
