import React from "react";
import "./App.css";
import {Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "./containers/login";
import AdminContainer from "./containers/adminContainer";

const history = createHistory();
const App = () => (
  <Router history={history}>
    <div>
      <Route path={"/login"} component={Login} />
      <Route exact path={"/"} component={AdminContainer} />
    </div>
  </Router>
);

export default App;
