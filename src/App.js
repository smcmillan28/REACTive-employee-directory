import React, { Component, } from "react";
import Jumbo from "./components/Jumbo.js";
import employees from "./employees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt, faSortAmountUpAlt } from "@fortawesome/free-solid-svg-icons";

const sortDown = <FontAwesomeIcon icon={faSortAmountDownAlt} />
const sortUp = <FontAwesomeIcon icon={faSortAmountUpAlt} />

const styles = {
  buttonStyle: {
    borderRadius: "10px",
    background: "grey",
    color: "white"
  },
  formStyle: {
    width: "90%",
    margin: "10px"
  }
}

class App extends Component {
  state = {
    employees,
    search: ""
  };

  sortAgeDown = () => {
    const employeesDown = this.state.employees.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1);
    this.setState({ ...this.state, employeesDown });
  };

  sortAgeUp = () => {
    const employeesUp = this.state.employees.sort((a, b) => (b.dob.age > a.dob.age) ? 1 : -1);
    this.setState({ ...this.state, employeesUp });
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">GoGo Gadgets - Employee Directory</p>
            <form className="d-flex">
              <input className="form-control me-4" type="search" placeholder="Type Last Name Here" onChange={this.handleInputChange} value={this.value} />
            </form>
          </div>
        </nav>
        <Jumbo />
        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Employee Username</th>
                <th scope="col">Employee Age <button style={styles.buttonStyle} onClick={this.sortAgeDown}>{sortDown}</button> <button style={styles.buttonStyle} onClick={this.sortAgeUp}>{sortUp}</button></th>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {employees.filter(emp => emp.name.last.toLowerCase().includes(this.state.search)).map(employee => (
              <tbody key={employee.login.username}>
                <tr>
                  <td>{employee.login.username}</td>
                  <th scope="row">{employee.dob.age}</th>
                  <td><img src={employee.picture.thumbnail} alt="employee"></img></td>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.email}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    )
  }

}

export default App;
