import React from 'react'
import { Form, Label} from 'semantic-ui-react'

export const EditRestaurantForm = (props) => {
     return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='name' placeholder='name' value={props.restaurant.name} onChange={(e) => props.handleFormChange({name: e.target.value})}/>
                <Form.Input fluid label='image' placeholder='image url' value={props.restaurant.image} onChange={(e) => props.handleFormChange({image: e.target.value})}/>
                <Form.Input fluid label='location' placeholder='location' value={props.restaurant.location} onChange={(e) => props.handleFormChange({location: e.target.value})}/>
                <Form.Input fluid label='revenue' labelPosition='right' type='text' placeholder='Amount' value={props.restaurant.revenue} onChange={(e) => props.handleFormChange({revenue: e.target.value})}>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                </Form.Input>
            </Form.Group>
        </Form>
    )
}