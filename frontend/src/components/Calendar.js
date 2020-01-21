import React from 'react'
import { Form, Icon} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput
  } from '../../node_modules/semantic-ui-calendar-react/';

export default class Calendar extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }
   
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        this.props.handleCalendar(name, value)
      }
    }
   
    render() {
      return (
        <div id="calendar">
            <Form>
                <div className="calendar-item">
                    <DateInput
                        name="date"
                        placeholder="Date"
                        closable={true}
                        value={this.state.date}
                        iconPosition="left"
                        onChange={this.handleChange}
                        clearable
                        clearIcon={<Icon name="remove" color="red" />}
                    />
                </div>
                <div className="calendar-item">
                    <TimeInput
                        name="time"
                        placeholder="Time"
                        closable={true}
                        value={this.state.time}
                        iconPosition="left"
                        onChange={this.handleChange}
                        clearable
                        clearIcon={<Icon name="remove" color="red" />}
                    />
                </div>
            </Form>
        </div>
      );
    }
  }