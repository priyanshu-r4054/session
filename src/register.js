// import React from 'react';
// import './App.css';
// // import Todoitem from './Todolist'
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     username: '',
//     email: '',
//     password: '',
//     password1: ''

//   }

//   handleChange = event => {
//     this.setState({[event.target.name]: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password,
//       password1: this.state.password1
//     };
//     if(user.password===user.password1){
//       axios.post(`http://127.0.0.1:8000/create_user/register/`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//     }

    
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             User name:
//             <input type="text" name="username" onChange={this.handleChange} />
//           </label>
//           <label>
//             Email:
//             <input type="text" name="email" onChange={this.handleChange} />
//           </label>
//           <label>
//              password:
//             <input type="password" name="password" onChange={this.handleChange} />
//           </label>
//           <label>
//              password1:
//             <input type="password" name="password1" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RegisterForm from "./RegisterForm.js";
import React, { Component ,Fragment } from "react";


class Register extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Register yourself";
    var button = <button onClick={this.toggle}>Register</button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <RegisterForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              //session={this.props.session}
              // token={this.props.token}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default Register;