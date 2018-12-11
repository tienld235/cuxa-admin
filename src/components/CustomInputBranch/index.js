import React, { Component } from "react";

class CustomInputBranch extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{this.props.label}</span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={this.props.value}
          disabled={true}
        />
      </div>
    );
  }
}
export default CustomInputBranch;
