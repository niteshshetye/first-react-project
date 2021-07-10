// Importing the packeges here
import { Switch, Route, Redirect } from "react-router-dom";

// Importing CSS files here
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Importing Components here
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        {/* If serching any Not avialble page */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
