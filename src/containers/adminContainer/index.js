import React, { Component } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  fetchUtils
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "../../components/UserList/UserList";
import AdminPanel from "../../components/adminpanel";
import { createMuiTheme } from "@material-ui/core/styles";
import Logout from "../logout";
import Login from "../login";
import URL from "../../constants/url";
import dataProvider from "./dataProvider";
import EmailsList from "../../components/EmailsList/EmailsList";
import NotificationsList from "../../components/NotificationsList/NotificationsList";
import UtilitiesList from "../../components/UtilitiesList/UtilitiesList";
import UserDetails from "../../components/UserDetails";

const httpClient = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: `Bearer ${localStorage.getItem("access_token")}`
  };
  return fetchUtils.fetchJson(url, options);
};

// const dataProvider = jsonServerProvider(URL, httpClient);
const theme = createMuiTheme({
  palette: { type: "light" }
});

class AdminContainer extends Component {
  componentDidMount() {
    console.log("token của User", localStorage.getItem("access_token"));
    if (localStorage.getItem("access_token") === null) {
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
          options={{ label: "Quản lý người dùng" }}
          list={UserList}
          edit={UserDetails}
        />
        <Resource
          name="emails"
          options={{ label: "Emails" }}
          list={EmailsList}
        />
        <Resource
          name="notifications"
          options={{ label: "Quản lý thông báo" }}
          list={NotificationsList}
        />
        <Resource
          name="utilities"
          options={{ label: "Tiện ích" }}
          list={UtilitiesList}
        />
        <Resource
          name="feedbacks"
          options={{ label: "Feedback" }}
          list={ListGuesser}
        />
        <Resource
          name="logout"
          options={{ label: "Đăng xuất" }}
          list={Logout}
        />
      </Admin>
    );
  }
}
export default AdminContainer;
