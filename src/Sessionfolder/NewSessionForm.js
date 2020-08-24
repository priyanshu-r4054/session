// import React from "react";
// import { Button, Form, FormGroup, Input, Label} from "reactstrap";
// import Select from 'react-select';
// import axios from "axios";
// import AddSlot from "./AddSlot";
// //import Slot from "./Slotfolder/Slot"
// class NewSessionForm extends React.Component {
//   state = {
//     id: 0,
//     owner: "",
//     subject: "",
//     description: "",
//     slotrangeid: 0,
//     label: "",
//     name: "",
//     selectOptions: []
//   };
  

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   async getOptions(){
//     const res = await axios.get('http://127.0.0.1:8000/addSlots/')
//     const data = res.data
//     //console.log(data)
//     const options = data.map(d => ({
//       "value" : d.id,
//       "label" : d.session_start + "---" + d.session_end

//     }))

//     this.setState({selectOptions: options});

//   }

//   handleChange1 = e => {
//     this.setState({slotrangeid:e.value,name:e.label});
//    }
 
//    componentDidMount(){
//         if (this.props.session) {
//           const { id, owner, subject, description,slotrangeid} = this.props.session;
//           this.setState({ id, owner, subject, description,slotrangeid });
//         }
//        this.getOptions()
//    }
 

//   createSession = e => {
//     console.log(this.state);
//     e.preventDefault();
//     axios.post('http://127.0.0.1:8000/sessions/', 
//         this.state ).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   editSession = e => {
//     e.preventDefault();
//     axios.put('http://127.0.0.1:8000/sessions/' + this.state.id + '/', this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   defaultIfEmpty = value => {
//     return value === "" ? "" : value;
//   };

//   render() {
//     // let optionItems = this.state.slots_avilable.map(slots =>
//     // <option key={slots.id} name="session_slot" value={slots.id}>{slots.session_start}-{slots.session_end}</option>
//     // );



//     return (
//       <Form onSubmit={this.props.session ? this.editSession : this.createSession} >
//         {/* <FormGroup>
//           <Label for="owner">Owner:</Label>
//           <Input
//             type="text"
//             name="owner"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.owner)}
//           />
//         </FormGroup> */}
//         <FormGroup>
//           <Label for="subject">Subject:</Label>
//           <Input
//             type="text"
//             name="subject"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.subject)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="description">Description:</Label>
//           <Input
//             type="text"
//             name="description"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.description)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="session_slot">Session_slot:</Label>
//           <div>
//           {/* <Slot getOptions={this.getOptions}>Add slot</Slot> */}
//           <Select options={this.state.selectOptions} onChange={this.handleChange1} />
//           </div>
//         </FormGroup>
//         <Button>Send</Button>
//       </Form>
//     );
//   }
// }

// export default NewSessionForm;
import React from "react";
import { Button, Form, FormGroup, Input, Label} from "reactstrap";
import Select from 'react-select';
import axios from "axios";
//import Slot from "./Slotfolder/Slot"
class NewSessionForm extends React.Component {
  state = {
    id: 0,
    owner: "",
    subject: "",
    description: "",
    slotrangeid: 0,
    label: "",
    name: "",
    selectOptions: [],
  };
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async getOptions(){
    const res = await axios.get('http://127.0.0.1:8000/addSlots/')
    const data = res.data
    //console.log(data)
    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.session_start + "---" + d.session_end

    }))

    this.setState({selectOptions: options});

  }

  handleChange1 = e => {
    this.setState({slotrangeid:e.value,name:e.label});
   }
 
   componentDidMount(){
        if (this.props.session) {
          const { id, owner, subject, description,slotrangeid} = this.props.session;
          this.setState({ id, owner, subject, description,slotrangeid });
        }
       this.getOptions()
   }
 

  createSession = e => {
    e.preventDefault();
    
    
    let index = -1;
    index = this.props.session1.findIndex(
        element => element.slotrangeid === this.state.slotrangeid
    );
    console.log(index);
     if(index >=0){
       //this.props.resetState();
  // this.state.owner="";
        this.props.toggle();
     }
     else{
    console.log(this.state);
    axios.post('http://127.0.0.1:8000/sessions/', 
        this.state ).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  }
  };

  editSession = e => {
    e.preventDefault();
     let index = -1;
     index = this.props.session1.findIndex(
        element => element.slotrangeid === this.state.slotrangeid
     );
    //console.log(index);
     if(index >=0){
       //this.props.resetState();
  // this.state.owner="";
        this.props.toggle();
     }
     else{
    axios.put('http://127.0.0.1:8000/sessions/' + this.state.id + '/', this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  }
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    // let optionItems = this.state.slots_avilable.map(slots =>
    // <option key={slots.id} name="session_slot" value={slots.id}>{slots.session_start}-{slots.session_end}</option>
    // );
    console.log("create");
    console.log(this.props.session1);


    return (
      <Form onSubmit={this.props.session ? this.editSession : this.createSession} >
        {/* <FormGroup>
          <Label for="owner">Owner:</Label>
          <Input
            type="text"
            name="owner"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.owner)}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input
            type="text"
            name="subject"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.subject)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="session_slot">Session_slot:</Label>
          <div>
          {/* <Slot getOptions={this.getOptions}>Add slot</Slot> */}
          <Select options={this.state.selectOptions} onChange={this.handleChange1} />
          </div>
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSessionForm;





