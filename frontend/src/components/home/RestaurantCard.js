import React from 'react'
import { history } from '../../history'

export default class RestaurantCard extends React.Component{

    getNumOfEmployees = () => {
        let count = 0
        this.props.restaurant.employees.forEach((employee) => count += 1)
        return count
    }

    getManager = () => {
        let manager = ""
        this.props.restaurant.employees.forEach((employee) => {
            if(employee.role === "manager") return manager = employee
        })
        return manager === "" ? "none" : manager.name
    }

    render(){
        return(
            <div className="restaurant-card" >
                <div className="ui divided items">
                    <div className="item">
                        <div className="image">
                            <img src={this.props.restaurant.image} alt="restaurant logo"></img>
                        </div>
                        <div className="content restaurant-content" >
                            <h3 className="header restaurant-title">{this.props.restaurant.name}</h3>
                            <div className="meta">
                                <span className="cinema" >{this.props.restaurant.location}</span>
                            </div>
                            <div className="description restaurant-description">
                                <p>mangager: {this.getManager()}<br />
                                num of employees: {this.getNumOfEmployees()}<br /> 
                                revenue: {this.props.restaurant.revenue}$ / month</p>
                            </div>
                            <div className="extra ui restaurant-buttons">
                                <button className="custom-button" onClick={() => {history.push(`/manage/${this.props.restaurant.id}`)}}>
                                    manage
                                </button>
                                <button className="custom-button">
                                    edit
                                </button>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }


}