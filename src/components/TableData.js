import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  updateId,
  updateData,
  updateCurrentData,
} from "../actions/detailActions";

class TableData extends Component {
  state = {
    list: [],
    current: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  };

  // loadData = () => {
  //   axios
  //     .get("https://testapi.webexcellis.in/api/users")
  //     .then((res) => this.setState({ list: res.data }))
  //     .catch((err) => console.log(err.message));
  // };

  // this.setState({ list: res.data }
  componentDidMount() {
    axios
      .get("https://testapi.webexcellis.in/api/users")
      .then((res) => this.props.updateData(res.data))
      .catch((err) => console.log(err.message));
  }
  deleteHandler = (e) => {
    axios
      .delete(`https://testapi.webexcellis.in/api/users/${e.target.id}`)
      .then((res) => {
        // console.log(res.message);
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };
  editHandler = (e) => {
    const currentData = this.props.list.filter(
      (person) => person.id === e.target.id
    );
    this.props.updateId(e.target.id);
    this.props.updateCurrentData(currentData[0]);
    // this.setState({
    //   current: this.state.list.find((person) => person.id === id),
    // });
    // console.log(this.state.current);
  };

  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list &&
              this.props.list.map((person, i) => {
                return (
                  <tr key={person.id}>
                    <td>{i + 1}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                    <td>
                      {" "}
                      <Link to="/details">
                        <Button
                          id={person.id}
                          index={i}
                          onClick={this.editHandler}
                          variant="primary"
                        >
                          Edit
                        </Button>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <Button
                        id={person.id}
                        index={i}
                        onClick={this.deleteHandler}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.detail.list,
  };
};

export default connect(mapStateToProps, {
  updateId,
  updateData,
  updateCurrentData,
})(TableData);
