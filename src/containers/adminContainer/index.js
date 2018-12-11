import React, { Component } from "react";
import { Admin, Resource, ListGuesser,fetchUtils} from "react-admin";
import UserList from "../../components/UserList/UserList";
import AdminPanel from "../../components/adminpanel";
import { createMuiTheme } from "@material-ui/core/styles";
import Logout from "../logout";
import Login from "../login";
import dataProvider from './dataProvider';
import RoomList from "../../components/RoomList";
import UserDetails from "../../components/UserDetails";
import RoomDetails from "../../components/RoomDetails";

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: `Bearer ${localStorage.getItem("access_token")}`
  }
  return fetchUtils.fetchJson(url, options);
}

// const dataProvider = jsonServerProvider(URL, httpClient);
const theme = createMuiTheme({
  palette: { type: "light" }
});


class AdminContainer extends Component {
  componentDidMount() {
    console.log("token của User", localStorage.getItem("access_token"));
    if(localStorage.getItem("access_token") === null){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Admin
        title="Cư Xá Admin"
        dataProvider={dataProvider}
        dashboard={AdminPanel}
        theme={theme}
        loginPage={Login}
      >
        <Resource
          name="users"
          options={{ label: "Moderate Users" }}
          list={UserList}
          edit={UserDetails}
        />
        <Resource
          name="rooms"
          options={{ label: "Moderate Rooms" }}
          list={RoomList}
          edit={RoomDetails}
        />
        <Resource
          name="feedbacks"
          options={{ label: "Feedback View" }}
          list={ListGuesser}
        />
        <Resource
          name="logout"
          options={{label: "Logout"}}
          list={Logout}
        />
      </Admin>
    );
  }
}
export default AdminContainer;
