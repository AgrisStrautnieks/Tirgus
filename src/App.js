import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import PageCTA from "./pages/PageCTA";

function App() {
  return (
    <Layout>
      <Switch>
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
        <Route path="/page-cta">
          <PageCTA />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
