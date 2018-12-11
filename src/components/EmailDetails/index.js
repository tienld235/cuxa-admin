import React, { Component } from "react";
import Axios from "axios";

class EmailDetails extends Component {
  state = {
    email: []
  };
  componentDidMount() {
    Axios.get("https://cx.emmasoft.com.vn/api/emails/" + this.props.id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(response => this.setState({ email: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.email.id);
    const { email } = this.state;
    return <div>{email.id}</div>;
  }
}

export default EmailDetails;
