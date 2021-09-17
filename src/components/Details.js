import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class Details extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  componentDidMount() {
    this.props.currentId
      ? this.setState({
          email: this.props.currentData.email,
          firstName: this.props.currentData.firstName,
          lastName: this.props.currentData.lastName,
          password: this.props.currentData.password,
        })
      : this.setState({ email: this.props.email });
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = () => {
    console.log(this.state);
    const data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
    };
    this.props.currentId
      ? axios
          .put(
            `https://testapi.webexcellis.in/api/users/${this.props.currentId}`,
            data
          )
          .then((res) => {
            // console.log(res.data);
            window.location.href = "http://localhost:3000/table";
          })
          .catch((err) => console.log(err))
      : axios
          .post("https://testapi.webexcellis.in/api/users/signUp", data)
          .then((res) => {
            // console.log(res.data);
            window.location.href = "http://localhost:3000/table";
          })
          .catch((err) => console.log(err));
  };

  render() {
    const isEdit = this.props.currentId;
    console.log(this.state.email);
    return (
      <div>
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            disabled={!isEdit}
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
          <label>Firstname</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChangeHandler}
          />
          <label>Lastname</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChangeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
        </form>
        <Button onClick={this.submitHandler}>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.detail.email,
    currentId: state.detail.currentId,
    currentData: state.detail.currentData,
  };
};

export default connect(mapStateToProps, {})(Details);
