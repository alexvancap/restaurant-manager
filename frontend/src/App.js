import React from 'react';
import './App.css';
import Login from './components/Login'
import EmployeesContainer from './components/home/EmployeesContainer'
import {Router, Route} from 'react-router-dom'
import { history } from './history';
import Signup from './components/Signup'
import Manage from './components/home/ManageContainer'


export default class App extends React.Component {
  state = {
    selectedPage: 'login',
}

componentDidMount() {
  if(localStorage.token){
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
        }
      })
  }else{
    history.push("/login")
  }
}

  selectPage = page => {
    this.setState({
      selectedPage: page
    });
  };

  render() {
    return (
      <div className="App" style={{margin: "0 auto", maxWidth: "960px",}}>
        <Router history={history}>
          <Route exact path={"/"} component={Manage} />
          <Route exact path={"/home"} component={Manage} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/employees"} component={EmployeesContainer} />
        </Router>
      </div>
    );
  }
}