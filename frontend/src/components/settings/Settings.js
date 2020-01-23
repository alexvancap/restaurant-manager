import React from "react";
import { history } from "../../history";

export default class Settings extends React.Component {
 
    state = {
        user: {}
    }
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
        });
    }
  }
  editButton(){
    history.push('/edit');
  }

  render() {
    return (
      <div>
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form">
                  <div className="field">
                    <label>NAME: {this.state.user.name}</label>
                  </div>
                  <div className="field">
                    <label>USERNAME: {this.state.user.username}</label>
                  </div>
                  <div className="field">
                    <label>DATE OF BIRTH: {this.state.user.dob}</label>
                  </div>
                  <div className="field">
                    <label>COUNTRY: {this.state.user.country}</label>
                  </div>
                  <div className="field">
                    <label>PHONE NUMBER: {this.state.user.phone}</label>
                  </div>
                  <div className="field">
                    <label>EMAIL: {this.state.user.email}</label>
                  </div>
                  <div className="field">
                    <label>{this.state.user.password}</label>
                  </div>
                  <button onClick={this.editButton} className="ui button"><i className="pencil alternate icon"></i>CLICK TO EDIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
