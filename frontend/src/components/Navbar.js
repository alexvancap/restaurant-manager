import React from "react";
import { Link } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import { history } from "../history";
export default class App extends React.Component {
  render() {
    return (
      <div className="ui three item menu">
        <Router history={history}>
          <div className="active item">
            <Link to="/home">Home</Link>
          </div>
          <div className="item">
            {/* <Link className="item"> */}
            Manage
            {/* </Link> */}
          </div>
          <div className="item">
            {/* <Link className="item">Settings</Link> */}
          </div>
        </Router>
      </div>
    );
  }
}