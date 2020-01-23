import React from 'react'
import { Form, Label, Dropdown } from 'semantic-ui-react'
import {
    TimeInput
  } from 'semantic-ui-calendar-react';

export class AddUserToRestaurantForm extends React.Component {
    state = {
        startDate: "",
        endDate: ""
    }
 

  
    handleChange = (e, {value}) => {
        this.props.handleDropdownState(value)
      }


    render(){
        return(
            <Form style={{marginTop: "20px"}}>
                 <Form.Group>
                    <Label key="ui small label" size="small">
                        select employees
                    </Label>
                    <Dropdown
                        required
                        onChange={this.handleChange.bind(this)}
                        placeholder='Selected employees'
                        multiple
                        fluid
                        selection
                        options={this.props.state.employeesToSelect}
                    />
                    
                </Form.Group>
                <Form.Group widths="equal">
                    <Label className="ui small label" size="small">
                        select start-time
                    </Label>
                    <TimeInput
                        name="selectedStartTime"
                        placeholder="Start time"
                        value={`${this.props.state.selectedStartTime}`}
                        iconPosition="left"
                        onChange={this.props.handleAddUserState}
                    />
                    <Label className="ui small label" size="small">
                        select end-time
                    </Label>
                    <TimeInput
                        name="selectedEndTime"
                        placeholder="End time"
                        value={`${this.props.state.selectedEndTime}`}
                        iconPosition="left"
                        onChange={this.props.handleAddUserState}
                    />
                </Form.Group>
            </Form>
        )
    }
   
}