import React from 'react';
import { history } from '../../history'
import EmployeeCard from './EmployeeCard'
import RestaurantCard from './RestaurantCard';

export default class ManageContainer extends React.Component{
    state={
        loggedInUser: {
            restaurants: []
        }
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
                this.setState({
                  loggedInUser: profile
                });
              }
            })
        }else{
          history.push("/login")
        }
    }

    render(){
        return(
            this.state.loggedInUser.restaurants.map(restaurant => (<RestaurantCard restaurant={restaurant}/>))
        )
    }
}