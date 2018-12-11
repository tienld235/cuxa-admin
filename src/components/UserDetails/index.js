import React from "react";
import { Edit, SimpleForm, DisabledInput } from "react-admin";
import Axios from "axios";
import URLAdmin from "../../constants/url";
import CustomInputBranch from "../CustomInputBranch";
// import RichTechInput from "ra-input-rich-text"; 
// export const UserDetails = props => (
//   <div>
//     <Edit {...props}>
//       <SimpleForm toolbar={false}>
//         <DisabledInput source="id" />
//         <DisabledInput source="email" />
//         <DisabledInput source="name" />
//         <DisabledInput source="picture" />
//       </SimpleForm>
//     </Edit>
//   </div>
// );
class UserDetails extends React.Component {
  state = {
    id: "",
    avatar: "",
    email: "",
    name: "",
    emailSubject: "",
    emailContent: ""
  };
  handleContentChange = e => {
    this.setState({ emailContent: e.target.value });
  };

  handleSubjectChange = e => {
    this.setState({ emailSubject: e.target.value });
  };
  componentDidMount() {
    const { id } = this.props;
    Axios.get(URLAdmin + "/api/users/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(response => {
        console.log(response.data);

        this.setState({
          id: response.data.id,
          name: response.data.name,
          avatar: response.data.picture,
          email: response.data.email
        });
      })
      .catch(er => console.log(er));
  }
  sendEmail = e => {
    e.preventDefault();
    const { id, emailContent, emailSubject } = this.state;
    if (
      emailContent === null ||
      emailContent === "" ||
      emailSubject === "" ||
      emailSubject === null
    ) {
      alert("Hãy nhập vào đầy đủ các trường trước khi gửi email");
    } else {
      Axios.post(
        URLAdmin + "/api/emails",
        {
          toUser: id,
          content: emailContent,
          subject: emailSubject
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      )
        .then(response => {
          alert("Thư của bạn đã được gửi thành công!");
          this.setState({ emailContent: "", emailSubject: "" });
        })
        .catch(error => console.log(error));
    }
  };
  render() {
    const { id, email, name, avatar, emailContent, emailSubject } = this.state;
    return (
      <div className="container-fluid">
        <h3 className="mt-4">Thông tin người dùng</h3>
        <div className="row">
          <div className="col-sm-5">
            <div className="mb-3 mt-4">
              <img src={avatar} alt={name} className="img-fluid" />
            </div>

            <CustomInputBranch value={id} label={"ID"}/>
            <CustomInputBranch value={name} label={"Họ tên"}/>
            <CustomInputBranch value={email} label={"Email"}/>
          </div>
          <div className="col-sm-7">
            <h5>Gửi email tới người dùng</h5>
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Subject
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={emailSubject}
                  onChange={this.handleSubjectChange}
                  required={true}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="content"
                  onChange={this.handleContentChange}
                  value={emailContent}
                  required={true}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={this.sendEmail}
              >
                Gửi tới {name}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
