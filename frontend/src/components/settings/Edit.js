import React from "react";
import { history } from "../../history";

export default class Edit extends React.Component {
  state = {
    user: {},
    username: "",
    name: "",
    dob: "",
    phone: "",
    country: "",
    email: "",
    password: ""
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
          this.setState({
            user: res,
            rendered: true,
            username: res.username,
            name: res.name,
            dob: res.dob,
            phone: res.phone,
            country: res.country,
            email: res.email,
            password: res.password
          });
        });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/edit/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        dob: this.state.dob,
        country: this.state.country,
        phone: this.state.phone,
        email: this.state.email
      })
    }).then(() => history.push("/settings"));
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
                    this.handleSubmit(e);
                  }}
                >
                  <div className="field">
                    <h1>EDIT YOUR INFORMATION</h1>
                    <p>Change your Username:</p>
                    <input
                      type="text"
                      placeholder="username"
                      value={this.state.username}
                      onChange={e =>
                        this.setState({
                          username: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className="field">
                    <p>Change your Name:</p>
                    <input
                      type="text"
                      placeholder="name"
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <p>Change your Date of Birth:</p>
                    <input
                      type="text"
                      placeholder="00/00/0000"
                      value={this.state.dob}
                      onChange={e => this.setState({ dob: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <p>Change Your Email:</p>
                    <input
                      type="text"
                      placeholder="Someone@email.com"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <p>Change Your Country:</p>
                    <input
                      type="text"
                      placeholder="Country"
                      value={this.state.country}
                      onChange={e =>
                        this.setState({
                          country: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className="field">
                    <p>Change Your Phone Number:</p>
                    <input
                      type="text"
                      placeholder="281-fuck-you0"
                      value={this.state.phone}
                      onChange={e => this.setState({ phone: e.target.value })}
                    />
                  </div>
                  {/* <div className="field">
                    <p>Change Your Password:</p>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({
                          password: e.target.value
                        })
                      }
                    />
                    <p>Please Re-Enter Your Password:</p>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({
                          password: e.target.value
                        })
                      }
                    />
                  </div> */}
                  <div>
                    <input className="ui button" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
