import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import { Route, Switch } from "react-router-dom";
const App = () =>
{
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin"  component={AdminPage} />
        <Route path="/auth"  component={AuthPage} />
      </Switch>
    </Layout>
  );
}

export default App;
