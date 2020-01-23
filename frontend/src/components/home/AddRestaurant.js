import React from 'react'
import { GenerateModal } from './GenerateModal'
import { AddRestaurantForm } from './AddRestaurantForm'
import { history } from './../../history'

export default class AddRestaurant extends React.Component {
    state = {
        open: false,
        name: "",
        image: "",
        location: "",
        revenue: ""     
    }

    show = (size) => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    handleFormChange = (stateToChange) => {
        this.setState(stateToChange)
    }

    handleFormSubmit = () => {
        if(localStorage.token){
            console.log(this.state)
            fetch(`http://localhost:3000/create_restaurant/${this.props.loggedInUserId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    image: this.state.image,
                    location: this.state.location,
                    revenue: this.state.revenue
                })
            })
              .then(res => res.json())
              .then(restaurant => {
                if (!restaurant.failed) {
                    console.log(restaurant)
                    this.props.handleAddRestaurant(restaurant)
                }
              })
          }else{
            history.push("/login")
          }
        

    }

    render() {
        return (
            <div>
                <div className="restaurant-card" id="add-restaurant" onClick={() => this.show("small")}>
                    <p> <i className="plus icon"></i> Add restaurant ...</p>
                </div>
                <GenerateModal 
                    handleModal={this.handleFormSubmit}
                    openModal={this.state.open}
                    modalSize={"small"}
                    closeModal={this.close}
                    formView={
                        <AddRestaurantForm 
                            handleFormChange={this.handleFormChange}
                            handleFormSubmit={this.handleFormSubmit}
                            state={this.state}
                        />
                    }
                />


            </div>
        )
    }
}