import React, { Component } from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "../../components/UserList/UserList";
import AdminPanel from "../../components/adminpanel";
import { createMuiTheme } from "@material-ui/core/styles";
import LogoutButton from "../../components/LogoutButton";
import { PostList } from "../../components/PostList";
import Login from "../login";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const theme = createMuiTheme({
  palette: { type: "dark" }
});

class AdminContainer extends Component {
  componentDidMount() {
    console.log(localStorage.getItem("access_token"));
  }

  render() {
    return (
      <Admin
        title="Cư Xá Admin"
        dataProvider={dataProvider}
        dashboard={AdminPanel}
        theme={theme}
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
          name="feedbacks"
          options={{ label: "Feedback View" }}
          list={ListGuesser}
        />
      </Admin>
    );
  }
}
export default AdminContainer;
