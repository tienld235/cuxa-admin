import React, { Component } from "react";
class CustomInput extends Component {
  handleChange = e => {
    this.props.inputChange(e.target.value);
  };
  componentDidMount() {}
  render() {
    console.log(this.props.value);
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
          type={this.props.type}
          name={this.props.name}
          className="form-control col-9 input"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CustomInput;
