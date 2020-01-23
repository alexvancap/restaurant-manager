import React from 'react'
import { Modal, Button} from 'semantic-ui-react'


export const GenerateModal = (props) => {
    return(
        <Modal open={props.openModal} size={props.modalSize} onClose={props.closeModal}>
            <Modal.Header>Add a table</Modal.Header>
            <Modal.Content>
                {props.formView}
            </Modal.Content>
            <Modal.Actions>
                <Button
                    positive
                    icon='checkmark'
                    labelPosition='left'
                    content='Create'
                    onClick={() => {
                        props.handleModal()
                        props.closeModal()
                    }}
                />
                <Button 
                    onClick={props.closeModal}
                    negative
                >
                    No
                </Button>
            </Modal.Actions>
        </Modal>
    )
}