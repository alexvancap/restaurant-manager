import React from "react";

export default class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: "",
    phone: ""
  };

  handleLogin = e => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        phone: this.state.phone,
        email: this.state.email
      })
    });
  };

  render() {
    return (
      <div>
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui fluid card">
              <div className="content">
                <form
                  className="ui form"
                  method="POST"
                  onSubmit={e => {
                    this.handleLogin(e);
                  }}
                >
                  <div className="field">
                    <label>Please Enter A Name</label>
                    <input
                      name="name"
                      placeholder="Your Name"
                      onChange={e => {
                        this.setState({ username: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div className="field">
                    <label>Please Enter Email </label>
                    <input
                      type="text"
                      name="user"
                      placeholder="Your Email"
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div className="field">
                    <label>Please Enter Phone Number</label>
                    <input
                      name="phone"
                      placeholder="000-000-0000"
                      onChange={e => {
                        this.setState({ phone: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div className="field">
                    <label>Create Username</label>
                    <input
                      name="username"
                      placeholder="Username"
                      onChange={e => {
                        this.setState({ username: e.target.value });
                      }}
                    ></input>
                  </div>
                  <div className="field">
                    <label>Create Password</label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="Password"
                      onChange={e => {
                        this.setState({ password: e.target.value });
                      }}
                    ></input>
                  </div>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="address card icon"></i>
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
