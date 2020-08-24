import React from "react";
import { Button, Form, FormGroup, Input, Label} from "reactstrap";
import Select from 'react-select';
import axios from "axios";
//import Slot from "./Slotfolder/Slot"
class RegisterForm extends React.Component {
  state = {
    id: 0,
    username: "",
    email:"",
    password: "",
    is_staff: false,
    // slotrangeid: 0,
    // label: "",
    // name: "",
    // selectOptions: []
  };
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 

  createSession = e => {
    console.log(this.state);
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/user/', 
        this.state ).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSession = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/sessions/' + this.state.id + '/', this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {

    return (
      <Form onSubmit={this.createSession} >
        <FormGroup>
          <Label for="owner">Username:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.owner)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.subject)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default RegisterForm;