import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter,ModalBody } from "reactstrap";
class UserModel extends Component {
  state = {
    modal: false
  };
 // if(this.props.user.length>=0){
      
 // }  



  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };


  render() {
     console.log(this.props.user)
     const getuser=this.props.user.length <=0 ? <h1>Till now no own suscribed this session</h1>:this.props.user.map( name =>{
        return(
            <h3>{name.owner}</h3>
        )
    }
    );

    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Suscribed--User
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            List of suscribed user for this channel
          </ModalHeader>
          <ModalBody>
              {getuser}
          </ModalBody>
          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default UserModel;