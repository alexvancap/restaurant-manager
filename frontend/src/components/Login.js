import React from "react";
import { Link } from "react-router-dom";
import { history } from "../history";


export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

    handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(res => {
          if (res.message === "success"){
            localStorage.setItem("token", res.token)
            history.push('/home')
          }
         
        })
      }

  render() {
    return (
      <div className="ui centered grid container">
        <div className="nine wide column">
          <div className="ui fluid card">
            <div className="content">
              <form
                className="ui form"
                method="POST"
              >
                <div className="field">
                  <label>User</label>
                  <input
                    type="text"
                    name="user"
                    placeholder="User"
                    onChange={e => {
                      this.setState({ username: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="field">
                  <label>Password</label>
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
                  onClick={e => {
                    this.handleLogin(e);
                  }}
                >
                  <i className="unlock alternate icon"></i>
                  Login
                </button>
                <Link className="ui primary labeled icon button" to={"/signup"}>
                  <i className="address card icon"></i>
                  Signup
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}
