import React from "react";

class Slot extends React.Component{

    state = {
        id: 0,
        


        modal: false
      };
    
      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };




    
      render() {
        var title = "Add slots";
        var button = <Button onClick={this.toggle}>Slot</Button>;
        return (
          <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
              <ModalBody>
                
              </ModalBody>
            </Modal>
          </Fragment>
        );
      }
    }






}
export default Slot;