import React from "react";
import EmployeeCard from "./EmployeeCard";
import HireEmployeeCard from "./HireEmployeeCard";

export default class HomeContainer extends React.Component {
  state = {
    user: {
      restaurants: []
    },
    employeeName: "",
    employeeEmail: "",
    employeePhone: "",
    employeeRole: "",
    rendered: false,
    allEmployees: []
  };

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/get_user_by_token", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ user: res, rendered: true });

          fetch(`http://localhost:3000/get_employees/${res.id}`)
            .then(res => res.json())
            .then(res => {
              this.setState({ allEmployees: res });
            });
        });
    }
  }

  fire = firedEmployee => {
    fetch(`http://localhost:3000/delete_employee/${firedEmployee.id}`, {
      method: "DELETE"
    });
    this.setState({
      allEmployees: this.state.allEmployees.filter(
        employee => employee != firedEmployee
      )
    });
  };

  setEmployeeName = event => {
    this.setState({
      employeeName: event
    });
  };

  setEmployeeEmail = event => {
    this.setState({
      employeeEmail: event
    });
  };

  setEmployeePhone = event => {
    this.setState({
      employeePhone: event
    });
  };

  setEmployeeRole = event => {
    this.setState({
      employeeRole: event
    });
  };

  handleSubmit = () => {
    fetch("http://localhost:3000/add_employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.employeeName,
        email: this.state.employeeEmail,
        phone: this.state.employeePhone,
        role: this.state.employeeRole
      })
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          user: {
            ...this.state.user,
            restaurants: [...this.state.user.restaurants, { employees: [res] }]
          }
          //   user: [...this.state.user.restaurants.employees, res]
        })
      );
  };

  render() {
    return (
      <div id="mainDiv" style={{ maxWidth: "960px", margin: "0 auto" }}>
        <HireEmployeeCard
          setEmployeeName={this.setEmployeeName}
          setEmployeeEmail={this.setEmployeeEmail}
          setEmployeePhone={this.setEmployeePhone}
          setEmployeeRole={this.setEmployeeRole}
          onSubmit={this.handleSubmit}
        />
        {this.state.allEmployees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            restaurant={this.state.restaurants}
            fire={this.fire}
          />
        ))}
      </div>
    );
  }
}
