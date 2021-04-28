import React, { Component } from "react";
// import EmployeeContainer from "./components/EmployeeContainer";
import Nav from "./components/Nav.js";
import Jumbo from "./components/Jumbo.js";
import employees from "./employees.json";

// function App() {
//   return <EmployeeContainer />;
// }

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbo />
        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Employee Age</th>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            {this.state.employees.map(employee => (
              <tbody>
                <tr>
                  <th scope="row">{employee.dob.age}</th>
                  <td><img src={employee.picture.thumbnail}></img></td>
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
