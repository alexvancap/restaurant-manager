import React from 'react'

export default class RestaurantCard extends React.Component{

    render(){
        return(
            <div id="ManageContainer" style={{maxWidth: "450px"}}>
                <div className="ui divided items" style={{flex: 1}}>
                    <div className="item">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Whataburger_logo.svg/1200px-Whataburger_logo.svg.png"></img>
                        </div>
                        <div className="content">
                            <a className="header">WhataBurger</a>
                            <div className="meta">
                                <span className="cinema" style={{margin: "50px"}}>Union Square 14</span>
                            </div>
                            <div className="description" style={{margin: "10px"}}>
                                <p>llolool</p>
                                <p>Manager: </p>
                            </div>
                            <div className="extra ui">
                                <button class="ui primary button">
                                    Save
                                </button>
                                <button class="ui red button">
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }


}