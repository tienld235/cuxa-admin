import React, { Component } from "react";
import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Login from "./containers/login";
import UserList from "./components/UserList/UserList";
import AdminPanel from "./containers/adminpanel";
import { createMuiTheme } from "@material-ui/core/styles";
import createHistory from "history/createBrowserHistory";
import LogoutButton from "./components/LogoutButton";
import { PostList } from "./components/PostList";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const theme = createMuiTheme({
  palette: { type: "light" }
});
const history = createHistory();

const App = () => (
  <Admin
    title="Cư Xá Admin"
    dataProvider={dataProvider}
    dashboard={AdminPanel}
    theme={theme}
    history={history}
    loginPage={Login}
    logoutButton={LogoutButton}
  >
    <Resource
      name="users"
      options={{ label: "Moderate Room" }}
      list={UserList}
      edit={EditGuesser}
    />
    <Resource
      name="posts"
      options={{ label: "Moderate Report" }}
      list={PostList}
    />
    <Resource
      naame="feedbacks"
      options={{ label: "Feedback View" }}
      list={ListGuesser}
    />
  </Admin>
);

export default App;
