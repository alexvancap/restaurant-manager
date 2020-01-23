import React from 'react'
import { history } from '../../history'
import { Modal, Button } from 'semantic-ui-react'
import { EditRestaurantForm } from './EditRestaurantForm'

export default class RestaurantCard extends React.Component{

    state={
        open: false,
        name: "",
        image: "",
        location: "",
        revenue: ""
    }

    componentDidMount(){
        this.setState({
            name: this.props.restaurant.name,
            image: this.props.restaurant.image,
            location: this.props.restaurant.location,
            revenue: this.props.restaurant.revenue
        })
    }


    handleFormChange = (objectToChange) => {
        this.setState(objectToChange)
    }

    handleEditForm(){
        console.log(this.state)
        fetch(`http://localhost:3000/update_restaurant/${this.props.restaurant.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                image: this.state.image,
                location: this.state.location,
                revenue: this.state.revenue
            })
        })
          .then(res => res.json())
          .then(response => {
              console.log(response)
            // if (!response.failed) {
            //   this.setState({
            //     name: response.name,
            //     image: response.image,
            //     location: response.location,
            //     revenue: response.revenue
            //   });
            // }
          })
    }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    // getNumOfEmployees = () => {
    //     let count = 0
    //     this.props.restaurant.employees.forEach((employee) => count += 1)
    //     return count
    // }

    render(){
        const { open, size } = this.state
        return(
            <div className="restaurant-card" >
                <div className="ui divided items">
                    <div className="item">
                        <div className="image">
                            <img src={this.state.image} alt="restaurant logo"></img>
                        </div>
                        <div className="content restaurant-content" >
                            <h3 className="header restaurant-title">{this.state.name}</h3>
                            <div className="meta">
                                <span className="cinema" >{this.state.location}</span>
                            </div>
                            <div className="description restaurant-description">
                            <p>
                                {/* num of employees: {this.getNumOfEmployees()}<br />  */}
                                revenue: {this.state.revenue}$ / month</p>
                            </div>
                            <div className="extra ui restaurant-buttons">
                                <button className="custom-button" onClick={() => {history.push(`/manage/${this.props.restaurant.id}`)}}>
                                    manage
                                </button>
                                <button className="custom-button" onClick={this.show('large')}>
                                    edit
                                </button>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Editing {this.state.name}</Modal.Header>
                    <Modal.Content>
                        <EditRestaurantForm restaurant={this.state} handleFormChange={this.handleFormChange}/>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            onClick={() => {
                                this.handleEditForm()
                                this.close()
                            }}
                            positive
                            icon='checkmark'
                            labelPosition='left'
                            content='Submit'
                        />
                        <Button 
                            negative
                            onClick={() => this.close()}
                        >
                            Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>  
        )
    }
}