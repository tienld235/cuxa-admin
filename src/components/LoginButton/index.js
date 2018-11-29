import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return (
      <div className="row">
        <button className="btn btn-block login-button btn-lg p-3">
          <span className="float-left text-light">{this.props.title}</span>
          <img
            className="float-right"
            src={this.props.images}
            width="20px"
            height="20px"
            style={{ marginTop: "5px" }}
            alt="password"
          />
        </button>
      </div>
    );
  }
}

export default LoginButton;