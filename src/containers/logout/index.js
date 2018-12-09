import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Authenticated } from "react-admin";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("access_token");
    this.props.history.push("/login");
  }
  render() {
    return (
      <Authenticated>
        <div />
      </Authenticated>
    );
  }
}
export default withRouter(Logout);
