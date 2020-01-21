import React from 'react';
import { history } from '../../history'
import RestaurantCard from './RestaurantCard';
import AddRestaurant from './AddRestaurant';

export default class ManageContainer extends React.Component{
    state={
        loggedInUser: {
            restaurants: [],
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
            <div className="manage-div">
                {this.state.loggedInUser.restaurants.map(restaurant => 
                    (<RestaurantCard 
                        key={restaurant.id} 
                        restaurant={restaurant} 
                    />)
                )}
                <AddRestaurant />
            </div>
        )
    }
}