import React from "react";

export const ManageRestaurantTable = (props) => {

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
                                   return (<p>{props.checkWorkDate(worktime, props.scheme.table)}</p>)
                               })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}