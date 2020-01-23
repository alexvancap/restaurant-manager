import React from 'react';
import './App.css';
import Login from './components/Login'
import EmployeesContainer from './components/home/EmployeesContainer'
import {Router, Route} from 'react-router-dom'
import { history } from './history';
import Signup from './components/Signup'
import Manage from './components/home/ManageContainer'
import ManageRestaurant from './components/home/ManageRestaurant';
import Navbar from './components/Navbar'
import Settings from './components/settings/Settings'
import Edit from './components/settings/Edit'


export default class App extends React.Component {

componentDidMount() {
  fetch('http://localhost:3000/get_user_by_token', {
      headers: {
          Authorization: `Bearer ${localStorage.token}`
      }
  })
  .then(res => res.json())
  .then(profile => {
    if (!profile.failed) {
      //  history.push("/home");
      this.setState({
        loggedInUser: profile
      });
    }else{
      history.push("/login")
    }
  })
}

  selectPage = page => {
    this.setState({
      selectedPage: page
    });
  };

  render() {
    return (
      <div className="App" style={{ margin: "0 auto", maxWidth: "960px" }}>
        <Navbar />
        <Router history={history}>
          <Route exact path={"/"} component={Manage} />
          <Route exact path={"/home"} component={Manage} />
          <Route exact path={"/manage/:id"} component={ManageRestaurant} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/employees"} component={EmployeesContainer} />
          <Route exact path={"/settings"} component={Settings} />
          <Route exact path={"/edit"} component={Edit} />
        </Router>
      </div>
    );
  }
}
