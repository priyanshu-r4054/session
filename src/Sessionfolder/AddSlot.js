import Select from 'react-select';
import axios from "axios";
import Slot from './Slot'
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { Component ,Fragment } from "react";

class AddSlot extends React.Component{
    state = {
        modal: false
      };
    
      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };
    
      render() {
        const create = this.props.create;
    
        var title = "Editing Session";
        var button = <Button onClick={this.toggle}>Add slot</Button>;
        return (
          <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
    
              <ModalBody>
                <Slot/>
              </ModalBody>
            </Modal>
          </Fragment>
        );
      }



}

export default AddSlot;