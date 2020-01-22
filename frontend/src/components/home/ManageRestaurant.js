import React from "react";
import { ManageRestaurantTable } from './ManageRestaurantTable'
import Calendar from '../Calendar'
import { Modal, Button} from 'semantic-ui-react'
import AddTableForm from "./AddTableForm";

export default class ManageRestaurant extends React.Component{
  
    getCurrentDate = () => {
        const d = new Date();
        return d.getDate()
    }
    state={
        restaurant: {
            employees: [],
            schemes: [],
            modalSize: "",
            worktimes: []
        },
        openModal: false,
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

    showModal = (modalSize) => () => this.setState({ modalSize, openModal: true })
    closeModal = () => this.setState({ openModal: false })

    handleAddTableForm = () => {
        
    }

    checkWorkDate = (worktime, role = "") => {
        let startTime = new Date(worktime.startTime)
        let endTime = new Date(worktime.endTime)
        let date = new Date(this.state.date)

        if((startTime.getDate() === date.getDate() + 1) && (endTime.getDate() === date.getDate() + 1)){
            if(role !== ""){
                if(worktime.employee.role === role){
                    return worktime.employee.name
                }
            }
            return worktime.employee.name
        }else{
            return false
        }
    }

    render(){
        return(
            <div id="manage-restaurant-container">
                <Calendar handleCalendar={this.handleCalendar}/>
                <button 
                    className="custom-button" 
                    id="add-table-button"
                    onClick={this.showModal('tiny')}
                >
                    <i aria-hidden="true" className="plus icon"></i>
                    Add table
                </button>
                {this.state.restaurant.schemes.map(scheme => (
                    <ManageRestaurantTable 
                    key={scheme.id} 
                    scheme={scheme} 
                    worktimes={this.state.restaurant.worktimes}
                    date={this.state.date}
                    time={this.state.time}
                    checkWorkDate={this.checkWorkDate}
                />
                ))}

                <Modal open={this.state.openModal} size={this.state.modalSize} onClose={this.closeModal}>
                    <Modal.Header>Add a table</Modal.Header>
                    <Modal.Content>
                        <AddTableForm 
                            handleAddTableForm={this.handleAddTableForm} 
                            checkWorkDate={this.checkWorkDate}
                            worktimes={this.state.restaurant.worktimes}
                        />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='left'
                            content='Create'
                        />
                        <Button 
                            onClick={this.closeModal}
                            negative
                        >
                            No
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}