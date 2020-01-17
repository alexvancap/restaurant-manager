import React from 'react'
import EmployeeCard from './EmployeeCard'

export default class HomeContainer extends React.Component {
    state = {
        user: {
            restaurants: [

            ]
        },
        rendered: false
    }

    componentDidMount() {
        if (localStorage.token) {
            fetch("http://localhost:3000/get_user_by_token", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then(res => res.json())
                .then(res => {
                    this.setState({ user: res, rendered: true })
                })
        }
    }
    render() {
        return (
            <div>
                {this.state.user.restaurants.map(restaurant => {
                    return restaurant.employees.map(employee =>
                        <EmployeeCard key={employee.id} employee={employee} restaurant={restaurant} />
                    )
                })}
            </div>
        )
    }
}