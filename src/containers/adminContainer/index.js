import React, { Component } from "react";
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "../../components/UserList/UserList";
import AdminPanel from "../../components/adminpanel";
import { createMuiTheme } from "@material-ui/core/styles";
import Logout from "../logout";
import { PostList } from "../../components/PostList";
import Login from "../login";
import URL from "../../constants/url";


const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: `Bearer ${localStorage.getItem("access_token")}`
  }
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(URL, httpClient);
const theme = createMuiTheme({
  palette: { type: "dark" }
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
          name="api/users"
          options={{ label: "Moderate Users" }}
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
