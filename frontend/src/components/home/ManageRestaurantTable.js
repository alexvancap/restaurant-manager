import React from "react";

export default class ManageRestaurantTable extends React.Component{
    state = {
        employeesInScheme: []
    }



    ////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!\\\\\\\\\\\\\\\\\\\\\
    ////////////////  DOESN'T WORK WHEN I CHANGE THE DATE  \\\\\\\\\\\\\\
    ////////////////  Because state changes the seme for every render \\\
    ////////////////  component did update is not the best function  \\\\
    ////////////////  because it doesn't render on load  \\\\\\\\\\\\\\\\
    ////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!\\\\\\\\\\\\\\\\\\\\\

    componentDidUpdate(){
        console.log(this.state.employeesInScheme)
        this.props.worktimes.map(worktime => {

            let startTime = new Date(worktime.startTime)
            let endTime = new Date(worktime.endTime)
            let date = new Date(this.props.date)

            if((startTime.getDate() === date.getDate() + 1) && (endTime.getDate() === date.getDate() + 1)){
                if(worktime.employee.role === this.props.scheme.table){
                    if(!this.state.employeesInScheme.includes(worktime.employee)){
                        console.log("i work")
                        console.log(this.state.employeesInScheme)
                        this.setState({
                            employeesInScheme: [...this.state.employeesInScheme, worktime.employee]
                        })
                    }
                      
                }
            }
        })
    }

    render(){
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
                                   {this.state.employeesInScheme.map(employee =>{
                                       return (<p>{employee.name}</p>)
                                   })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}