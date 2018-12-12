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
    return (
      <div className="container-fluid">
        <table id="example" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Email Id</th>
              <th>Subject</th>
              <th>Content</th>
              <th>From</th>
              <th>To user</th>
              <th>Created date</th>
              <th>Updated date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{email.id}</td>
              <td>{email.subject}</td>
              <td>{email.content}</td>
              <td>{email.fromEmail}</td>
              <td>{email.toUser}</td>
              <td>{email.createdAt}</td>
              <td>{email.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmailDetails;
