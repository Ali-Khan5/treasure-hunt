import React from "react";
import App from './App';
import Test from "./Components/MainComponets/Test"
import MyNav from "./Components/smallComponents/Navbar"
import Train from "./Components/MainComponets/Train"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routers() {
  return (
    <Router>
      <div>
<MyNav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/test" >
            <Test />
          </Route>
          <Route path="/train" >
            <Train />
          </Route>
          <Route path="/" >
            <App />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}