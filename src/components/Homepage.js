import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateEmail } from "../actions/detailActions";

class Homepage extends Component {
  state = {
    text: "",
  };
  onchange = (e) => {
    this.setState({ text: e.target.value });
  };
  nextClickHandler = () => {
    // this.props.onChangeHandler("email", this.state.text);
    this.props.updateEmail(this.state.text);
  };
  render() {
    return (
      <div>
        <label>Email</label>{" "}
        <input type="email" value={this.state.text} onChange={this.onchange} />
        <Link to="/details" onClick={this.nextClickHandler}>
          Next
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.detail.email,
  };
};

export default connect(mapStateToProps, { updateEmail })(Homepage);
