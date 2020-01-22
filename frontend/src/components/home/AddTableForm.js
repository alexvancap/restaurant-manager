import React from 'react';
import { Form, Dropdown, Label } from 'semantic-ui-react'

export default class AddTableForm extends React.Component {
    state={
        tableName: "",
        amountOfDropDowns: 0,
        employeesToSelect: []
    }

    componentDidMount(){
        console.log(this.props)
    }

    componentDidMount(){
        this.setState({
            // FILTERS EMPLOYEES WHO ARE WORKING TODAY
            // .filter(worktime => {
            //     return this.props.checkWorkDate(worktime) !== false
            // }).
            employeesToSelect: this.props.worktimes.map(worktime => {
                return {
                    key: worktime.employee.id,
                    text: worktime.employee.name,
                    value: worktime.employee.id
                }
            })})
     }

    render(){
        return(
            <Form widths='equal' onSubmit={() => this.props.handleAddTableForm}>
                <Form.Group>
                    <Label key="ui small label" size="small">
                        Table Name
                    </Label>
                    <Form.Input 
                        width={12}
                        placeholder='Name'
                        name='name'
                        value={this.state.tableName}
                        onChange={(e) => this.setState({tableName: e.target.value})}
                    />
                </Form.Group>
                <Form.Group>
                    <Label key="ui small label" size="small">
                        select employees
                    </Label>
                    <Dropdown
                        
                        placeholder='Selected employees'
                        multiple
                        fluid
                        selection
                        options={this.state.employeesToSelect}
                    />
                </Form.Group>
            </Form>
        )
    }
}