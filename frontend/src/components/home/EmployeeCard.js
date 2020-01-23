import React from "react";

export default class EmployeeCard extends React.Component {
  handleEmployee = () => {
    this.props.fire(this.props.employee);
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
          <div onClick={() => this.handleEmployee()}>
            <button>Fire!</button>
          </div>
        </div>
        <div className="extra content">
          <a href="/#">
            <i className="user icon"></i>
          </a>
        </div>
      </div>
    );
  }
}
