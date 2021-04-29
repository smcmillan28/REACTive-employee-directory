import React, { Component } from "react";
import Nav from "./components/Nav.js";
import Jumbo from "./components/Jumbo.js";
// import Table from "./components/Table.js";
import employees from "./employees.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";

const sortDown = <FontAwesomeIcon icon={faSortAmountDown} />

class App extends Component {
  state = {
    employees
  };

  sortAge = () => {
    const employeesDown = this.state.employees.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1);
    const employeesUp = this.state.employees.sort((a, b) => (b.dob.age > a.dob.age) ? 1 : -1);

    if (this.state === employeesUp) {
      this.setState({ employeesDown });
    } else if (this.state === employeesDown) {
      this.setState({ employeesUp });
    }
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
                <th scope="col">Employee Age <button onClick={this.sortAge}>{sortDown}</button></th>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {this.state.employees.map(employee => (
              <tbody>
                <tr>
                  <th>{employee.login.username}</th>
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
