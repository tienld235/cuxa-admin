import React, { Component } from "react";
import "./login.css";
import usernameIcon from "../../assets/images/avatar.png";
import passwordIcon from "../../assets/images/key.png";
import loginIcon from "../../assets/images/enter.png";
import LoginButton from "../../components/LoginButton";
import arrowIcon from "../../assets/images/right-arrow.png";
import CustomInput from "../../components/CustomInput";
import emailIcon from "../../assets/images/envelope.png";

class Login extends Component {
  state = {
    isForget: false
  };

  onForgetPasswordClick = () => {
    this.setState({ isForget: !this.state.isForget });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="frame1 row text-light align-items-center">
          <div className="col-4 offset-4 text-center">
            <h1 className="font-weight-bold">CƯ XÁ</h1>
            <p>Phần này chỉ dành cho Admin.</p>
          </div>
        </div>

        <div class="arrow-down" />

        <div className="frame2 row align-items-center">
          {this.state.isForget === false ? (
            <div className="col-4 offset-4">
              <CustomInput
                images={usernameIcon}
                alt={"username"}
                name="username"
                placeholder={"Tên đăng nhập"}
              />

              <CustomInput
                images={passwordIcon}
                alt={"password"}
                name="password"
                placeholder={"Mật khẩu"}
              />

              <LoginButton title={"Login In"} images={loginIcon} />

              <div className="bottom-field text-center">
                <a href="#" onClick={this.onForgetPasswordClick} className="">
                  <span>Quên mật khẩu?</span>
                </a>
                <br />
                <a href="#" className="">
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="col-4 offset-4">
              <CustomInput
                images={emailIcon}
                alt={"email"}
                name="email"
                placeholder={"Email"}
              />

              <LoginButton title={"Gửi Email"} images={arrowIcon} />

              <div className="bottom-field text-center">
                <a href="#" onClick={this.onForgetPasswordClick} className="">
                  <span>Quay lại trang đăng nhập</span>
                </a>
                <br />
                <a href="#" className="">
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;