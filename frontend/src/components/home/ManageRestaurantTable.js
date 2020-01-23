import React from "react";
import { Modal, Button } from 'semantic-ui-react'
import { AddUserToRestaurantForm } from "./AddUserToRestaurantForm";

export class ManageRestaurantTable extends React.Component {
    getCurrentDate = () => {
        const date = new Date()
        return date
    }
    state = { 
        open: false ,
        addUser: {
            employeesToSelect: [],
            selectedEmployees: [],
            selectedStartTime: "",
            selectedEndTime: "",
        },
        newemployeesToSelect: []
    }

    ///////////////////////change startDate to the day that is selected


    // removeDuplicates = (array, key) => {
    //     let newArray = []
    //     return array.filter(item => {
    //         if(newArray.includes(item)){
    //             return false
    //         }else{
    //             newArray.push(item)
    //             return true
    //         }
    //     })
    // }
   
    
    
    componentDidMount(){

        fetch(`http://localhost:3000/get_employees/1`)
        .then(res => res.json())
        .then(res => {
    
        
        console.log(res)
        this.setState({
            addUser: { ...this.state.addUser,
                employeesToSelect: res.map(employee => {
                    return {
                        key: employee.id,
                        text: employee.name,
                        value: employee.id
                    }
                })
            }
        })
    
        })

       
    }

    handleAddUser = () => {
        fetch('http://localhost:3000/add_worktimes', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                employees: this.state.addUser.selectedEmployees,
                startTime: this.state.addUser.selectedStartTime,
                endTime: this.state.addUser.selectedEndTime,
                role: this.props.scheme.table,
                restaurant_id: this.props.restaurantId
            })
        })
        .then(res => res.json())
        .then(profile => {



            ////////////////////////////////////////////////
            console.log(profile)
        })
    }

    handleDropdownState = (state) => {
        this.setState({
            addUser: {
                ...this.state.addUser, selectedEmployees: state
            }
        })
    }

    handleAddUserTime = (event, {name, value}) => {

        const newDate = new Date(this.props.date)
        newDate.setHours(parseInt(value))

        this.setState({
            addUser: {...this.state.addUser, [name]: newDate}
        })
    }

    show = (size) => this.setState({ size, open: true })
    close = () => this.setState({ open: false })


    render(){

        const { open, size } = this.state
        return(
            <div className="manage-div ui center aligned three column grid">
                <div className="row">
                    <div className="column">
                        <div className="manage-resturant-table ui vertical fluid menu"
                            style={{ 
                                position: "absolute",
                                top: "50px",
                            }}
                        >
                            <div className="header item">
                                {this.props.scheme.table}
                                <div className="item">
                                   {this.props.worktimes.map(worktime => {
                                       return (<p>{this.props.checkWorkDate(worktime, this.props.scheme.table)}</p>)
                                   })}
                                    
                                </div>
                                <div 
                                    style={{marginBottom: '-10px',}} 
                                    className='custom-button'
                                    onClick={() => this.show()}
                                >
                                    Add User
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Add a user</Modal.Header>
                    <Modal.Content>
                        <p>Please select one or multiple users you would like to add to the <b>{this.props.scheme.table}</b> table</p>
                        <AddUserToRestaurantForm
                            state={this.state.addUser}
                            handleAddUserState={this.handleAddUserTime}
                            handleDropdownState={this.handleDropdownState}
                            selectedStartTime={this.state.addUser.selectedStartTime}
                            selectedEndTime={this.state.addUser.selectedEndTime}
                        />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='left'
                            content='Add user(s)'
                            onClick={() => {
                                this.handleAddUser()
                                this.close()
                            }}
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