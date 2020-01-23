import React from "react";

export default class EmployeeCard extends React.Component {
  handleEmployee = () => {
    fetch(`http://localhost:3000/delete_employee/${this.props.employee.id}`, {
      method: "DELETE"
    });
  };
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src="/images/avatar2/large/kristy.png" alt=""></img>
        </div>
        <div className="content">
          <a className="header" href="/#">
            {this.props.employee.name}
          </a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            {`phone: ${this.props.employee.phone} \n
              email: ${this.props.employee.email} \n
            `}
          </div>
          <form onClick={this.handleEmployee}>
            <button>Fire!</button>
          </form>
        </div>
        <div className="extra content">
          <a href="/#">
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    );
  }
}
