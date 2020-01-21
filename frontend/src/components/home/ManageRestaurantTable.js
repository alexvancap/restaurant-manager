import React from "react";

const ManageRestaurantTable = (props) => {
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
                                Kitchen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageRestaurantTable