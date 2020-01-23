import React from 'react';
import { Form, Label } from 'semantic-ui-react'

export default class AddTableForm extends React.Component {
    state={
        tableName: "",
        amountOfDropDowns: 0,
        employeesToSelect: []
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
            </Form>
        )
    }
}