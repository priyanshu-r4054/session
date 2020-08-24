import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SessionList from "./Sessionfolder/SessionList";
import NewSessionModal from "./Sessionfolder/NewSessionModal";
import axios from "axios";

class Home extends Component {
  state = {
    session: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSession = () => {
    axios.get('http://127.0.0.1:8000/sessions/',
    // {
    //   headers: {
    //     'Authorization': `token ${this.props.token}`
    //   }
    // }
    ).then(res => this.setState({ session: res.data }));
  };

  resetState = () => {
    this.getSession();
  };

  render() {
    console.log("ss");
    console.log(this.state.session);
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SessionList
              session={this.state.session}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewSessionModal create={true} resetState={this.resetState}
                                                                        ro={this.state.session}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;