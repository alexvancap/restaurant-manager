import React from "react";
import { ManageRestaurantTable } from './ManageRestaurantTable'
import Calendar from './Calendar'
import { GenerateModal } from "./GenerateModal";
import AddTableForm from "./AddTableForm";

export default class ManageRestaurant extends React.Component{
  
    getCurrentDate = () => {
        const d = new Date();
        const month = d.getMonth() + 1
        const newDay = d.getDate() < 10 
        ? "0" + d.getDate()
        : d.getDate()
        const newMonth = month < 10 
        ? "0" + month
        : d.getMonth() + 1
        return `${d.getFullYear()}-${newMonth}-${newDay}`
    }
    state={
        restaurant: {
            employees: [],
            schemes: [],
            modalSize: "",
            worktimes: [],
            id: null
        },
        openAddFormModal: false,
        openAddUserModal: false,
        date: "",
        time: null
    }
    
    componentDidMount(){
        this.setState({date: this.getCurrentDate()})

        fetch(`http://localhost:3000/get_restaurant/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({restaurant: res}))
    }

    handleCalendar = (name, value) => {
        if (this.state.hasOwnProperty(name)) {
            if (value !== "" && value !== "Invalid Date"){
                this.setState({ [name]: value })
            }

        }
    }

    showAddFormModal = (modalSize) => () => this.setState({ modalSize, openAddFormModal: true })
    closeAddFormModal = () => this.setState({ openAddFormModal: false })
    showAddUserModal = (modalSize) => () => this.setState({ modalSize, openAddUserModal: true })
    closeAddUserModal = () => this.setState({ openAddFormModal: false })

    checkWorkDate = (worktime, role = "") => {
        let startTime = new Date(worktime.startTime)
        let endTime = new Date(worktime.endTime)
        let date = new Date(this.state.date)

        if((startTime.getDate() === date.getDate()) && (endTime.getDate() === date.getDate())){
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
                    onClick={this.showAddFormModal('tiny')}
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
                    restaurantId={this.state.restaurant.id}
                />
                ))}

                <GenerateModal 
                    openModal={this.state.openAddFormModal}
                    modalSize={this.state.modalSize}
                    closeModal={this.closeAddFormModal}
                    formView={<AddTableForm />}
                />
                <GenerateModal
                    openModal={this.state.openUserodal}
                    modalSize={this.state.modalSize}
                    closeModal={this.closeUserModal}
                    // formView={<AddUserForm handleAddUserForm={this.handleAddUSerForm} />}
                />
            </div>
        )
    }
}