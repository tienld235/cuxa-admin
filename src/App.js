import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "./containers/login";
import AdminContainer from "./containers/adminContainer";

const history = createHistory();
const App = () => (
  <BrowserRouter history={history}>
    <div>
      <Route path={"/login"} component={Login} />
      <Route exact path={"/"} component={AdminContainer} />
    </div>
  </BrowserRouter>
);

export default App;
