import React, { Component } from "react";
import Axios from "axios";
import URLAdmin from "../../constants/url";
import CustomInputLabel from "../CustomInputLabel";
import { Link } from "react-router-dom";

class RoomDetails extends Component {
  state = {
    room: [],
    utilities: []
  };

  componentDidMount() {
    const { id } = this.props;
    Axios.get(URLAdmin + "/api/rooms/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(response => {
        this.setState({ room: response.data });
        response.data.utilities.map(item => {
          Axios.get(URLAdmin + "/api/utilities/" + item, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
          })
            .then(response =>
              this.setState({
                utilities: [...this.state.utilities, response.data.name]
              })
            )
            .catch(error => console.log(error));
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { room, utilities } = this.state;
    console.log(utilities);

    return (
      <div className="container-fluid">
        <h3 className="mt-4">Phòng {room.name}</h3>
        <div className="row">
          <div className="col-sm-6">
            {room.images
              ? room.images.map(item => {
                  return (
                    <img className="col-sm-6" key={item.id} src={item.src} />
                  );
                })
              : null}
          </div>
          <div className="col-sm-3">
            <h5>Thông tin chi tiết</h5>
            <CustomInputLabel
              value={room.name ? room.name : ""}
              label={"Tên phòng:"}
            />
            <CustomInputLabel
              value={room.price ? room.price + " đồng" : ""}
              label={"Giá: "}
            />

            <CustomInputLabel
              value={
                room.electricityPrice ? room.electricityPrice + " đồng" : ""
              }
              label={"Giá điện: "}
            />
            <CustomInputLabel
              value={room.address ? room.address : ""}
              label={"Address: "}
            />
            <CustomInputLabel
              value={room.area ? room.area + " m vuông" : ""}
              label={"Diện tích: "}
            />
            <CustomInputLabel
              value={room.amountOfTenant ? room.amountOfTenant + " người" : ""}
              label={"Số người ở: "}
            />
            <CustomInputLabel
              value={
                room.genderAccepted
                  ? room.genderAccepted === "both"
                    ? "Cả nam và nữ"
                    : room.genderAccepted
                  : ""
              }
              label={"Giới tính người thuê: "}
            />
          </div>
          <div className="col-sm-3">
            <h5>Thông tin chủ nhà</h5>
            <Link to={room.landlord ? "/users/" + room.landlord.id : ""}>
              <CustomInputLabel
                value={room.landlord ? room.landlord.name : ""}
                label={"Tên: "}
              />
            </Link>
            <label>Tiện nghi:</label>
            {utilities.map(item => {
              return (
                <div className="form-group">
                  <div className="form-control">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={true}
                    />
                    <label className="form-control">{item}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <center className="mt-4">
          {room.isVerified === false ? (
            <button type="button" class="btn btn-primary btn-lg mr-2" onClick={this.verifyRoom}>
              Verify
            </button>
          ) : (
            <button type="button" class="btn btn-success btn-lg mr-2">
              Verified
            </button>
          )}

          <button type="button" class="btn btn-danger btn-lg">
            Large button
          </button>
        </center>
      </div>
    );
  }
}
export default RoomDetails;
