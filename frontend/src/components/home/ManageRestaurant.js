import React from "react";
import ManageRestaurantTable from './ManageRestaurantTable'
import Calendar from '../Calendar'

export default class ManageRestaurant extends React.Component{
  
    getCurrentHours = () => {
        d = new date();
        return d.getHours()
    }
    state={
        restaurant: {
            schemes: []
        },
        date: new Date(),
        time: null
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/get_restaurant/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({restaurant: res}))
        console.log(this.state)
    }

    handleCalendar = (name, value) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value })
        }
    }

    checkEmployeeWorkTime = () => {
        this.state.date
    }

    render(){
        return(
            <div id="manage-restaurant-container">
                <Calendar handleCalendar={this.handleCalendar}/>
                {this.state.restaurant.schemes.map(scheme => (
                    <ManageRestaurantTable key={scheme.id} scheme={scheme}/>
                ))}
            </div>
        )
    }
}