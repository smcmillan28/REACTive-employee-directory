import React, { Component } from "react";
import Nav from "./components/Nav.js";
import Jumbo from "./components/Jumbo.js";
import employees from "./employees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown, faSortAmountUp } from "@fortawesome/free-solid-svg-icons";

const sortDown = <FontAwesomeIcon icon={faSortAmountDown} />
const sortUp = <FontAwesomeIcon icon={faSortAmountUp} />

class App extends Component {
  state = {
    employees
  };

  sortAgeDown = () => {
    const employeesDown = this.state.employees.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1);
    this.setState({ employeesDown });
  }

  sortAgeUp = () => {
    const employeesUp = this.state.employees.sort((a, b) => (b.dob.age > a.dob.age) ? 1 : -1);
    this.setState({ employeesUp });
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbo />
        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Employee Username</th>
                <th scope="col">Employee Age <button onClick={this.sortAgeDown}>{sortDown}</button> <button onClick={this.sortAgeUp}>{sortUp}</button></th>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {this.state.employees.map(employee => (
              <tbody>
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
