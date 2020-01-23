import React from "react";
import { Button, Modal, Input } from "semantic-ui-react";

export default class HireEmployeeCard extends React.Component {
  state = {
    open: false,
    user: {
      restaurants: []
    },
    employeeName: "",
    employeeEmail: "",
    employeePhone: "",
    employeeRole: "",
    rendered: false
  };

  show = size => () => this.setState({ size, open: true });
  close = () => {
    this.setState({ open: false });
    this.props.onSubmit();
  };

  // hireEmployeae = ()=> {
  //   fetch(`http://localhost:3001/hire_employee/${}`);
  // }

  render() {
    const { open, size } = this.state;
    return (
      <div>
        <Button onClick={this.show("large")}>Hire New Employee</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Hire New Employee</Modal.Header>
          <Modal.Content>
            <form>
              <label style={{ margin: "10px" }}>Name:</label>
              <Input
                onChange={e => this.props.setEmployeeName(e.target.value)}
              />
              <br />
              <label style={{ margin: "10px" }}>Email:</label>
              <Input
                onChange={e => this.props.setEmployeeEmail(e.target.value)}
              />
              <br />
              <label style={{ margin: "10px" }}>Phone:</label>
              <Input
                onChange={e => this.props.setEmployeePhone(e.target.value)}
              />
              <br />
              <label style={{ margin: "10px" }}>Role:</label>
              <Input
                onChange={e => this.props.setEmployeeRole(e.target.value)}
              />
            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Cancel</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Hire!"
              type="submit"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
