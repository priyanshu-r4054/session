import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewSessionForm from "./NewSessionForm";
import React, { Component ,Fragment } from "react";
import axios from "axios";

class NewSessionModal extends Component {
  state = {
    modal: false,
    checksession:[]
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
    axios.get('http://127.0.0.1:8000/sessions/'
    
    ).then(res => this.setState({ checksession: res.data }));
  };

  render() {
    const create = this.props.create;
    console.log("sess");
    console.log(this.props.ro);
    var title = "Editing Session";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Session";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewSessionForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              session1={this.state.checksession}
              session={this.props.session}
              // token={this.props.token}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewSessionModal;