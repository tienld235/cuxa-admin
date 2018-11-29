import React, { Component } from "react";

class CustomInput extends Component {
  render() {
    return (
      <div className="form-group row align-items-center inputDiv">
        <div className="col-3 text-center label">
          <img
            src={this.props.images}
            width="20px"
            height="20px"
            alt={this.props.alt}
          />
        </div>
        <input
          name={this.props.name}
          className="form-control col-9 input"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default CustomInput;