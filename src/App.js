import Layout from "./components/Layout";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
