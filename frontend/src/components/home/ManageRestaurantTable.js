import React from "react";

export const ManageRestaurantTable = (props) => {

    const checkWorkDate = (worktime) => {

        let startTime = new Date(worktime.startTime)
        let endTime = new Date(worktime.endTime)
        let date = new Date(props.date)

        if((startTime.getDate() === date.getDate() + 1) && (endTime.getDate() === date.getDate() + 1)){
            if(worktime.employee.role === props.scheme.table){
                return worktime.employee.name
                  
            }
        }
    }

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
                            {props.scheme.table}
                            <div className="item">
                               {props.worktimes.map(worktime =>{
                                   return (<p>{checkWorkDate(worktime)}</p>)
                               })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}