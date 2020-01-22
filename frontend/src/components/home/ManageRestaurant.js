import React from "react";
import ManageRestaurantTable from './ManageRestaurantTable'
import Calendar from '../Calendar'

export default class ManageRestaurant extends React.Component{
  
    getCurrentDate = () => {
        const d = new Date();
        return d.getDate()
    }
    state={
        restaurant: {
            employees: [],
            schemes: [],
            
        },
        date: this.getCurrentDate(),
        time: null
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/get_restaurant/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({restaurant: res}))
    }

    handleCalendar = (name, value) => {
        if (this.state.hasOwnProperty(name)) {
            if (value !== "" && value !== "Invalid Date"){
                const date = new Date(value)
                this.setState({ [name]: value })
            }

        }
    }

    checkEmployeeWorkTime = () => {
    }

    render(){
        return(
            <div id="manage-restaurant-container">
                <Calendar handleCalendar={this.handleCalendar}/>
                {this.state.restaurant.schemes.map(scheme => (
                    <ManageRestaurantTable 
                    key={scheme.id} 
                    scheme={scheme} 
                    worktimes={this.state.restaurant.worktimes}
                    date={this.state.date}
                    time={this.state.time}
                />
                ))}
            </div>
        )
    }
}