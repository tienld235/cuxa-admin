import React, { Component } from "react";

class CustomInputLabel extends Component {
  render() {
    return (
      <div className="form-group mb-2">
        <label>{this.props.label}</label>
        <input
          type="text"
          className="form-control"
          value={this.props.value}
          disabled={true}
        />
      </div>
    );
  }
}
export default CustomInputLabel;
