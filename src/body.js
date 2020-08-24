import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NewSessionModal from "./Sessionfolder/NewSessionModal";
import axios from "axios";
import App1 from "./App1";
import SlotT from "./slotTable";

class Body extends Component {
    state = {
        slot: []
      };
    
      componentDidMount() {
        this.resetState();
      }
    
      getSession = () => {
        axios.get('http://127.0.0.1:8000/students_slots/').then(res => this.setState({ slot: res.data }));
        console.log(this.state.slot);
    };
    
      resetState = () => {
        this.getSession();
      };


  render() {
    console.log(this.state.slot);
    console.log(this.props.user);
    return (
        
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SlotT
              slot={this.state.slot}
              resetState={this.resetState}
              user={this.props.user}
              check={this.props.check}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          { this.props.check===false ?  (<App1 resetState={this.resetState} 
          owner1={this.props.user}   
          slot={this.state.slot}
           />
          ):(<div></div>)
           }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;