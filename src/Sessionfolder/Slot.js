import React from "react";
import { Button, Form, FormGroup, Input, Label} from "reactstrap";
import Select from 'react-select';
import axios from "axios";
//import { DateTimePicker } from 'react-widgets';
// import DateTimeField from 'react-bootstrap-datetimepicker';
// import moment from  'moment';
// import momentLocalizer from 'react-widgets-moment'
import DateTime from "@nateradebaugh/react-datetime";
import "@nateradebaugh/react-datetime/scss/styles.scss";
import subDays from "date-fns/subDays";
import isAfter from "date-fns/isAfter";
import moment from 'moment';

//import Slot from "./Slotfolder/Slot"
class Slot extends React.Component {
  state = {
    session_start: "",
    session_end: "",
    slotlist:[],
    message: "",
    tog: false
  };
 

  setValue = value => {
    this.setState({ session_start: moment(value).format("YYYY-MM-DD[T]HH:mm:ss") });
    
  };
  setValue1 = value => {
    this.setState({ session_end: moment(value).format("YYYY-MM-DD[T]HH:mm:ss") });
    
  };


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
 
   componentDidMount(){
    axios.get('http://127.0.0.1:8000/addSlots/',
    ).then(res => this.setState({ slotlist: res.data }));
   }
 

  createslot = e => {
    e.preventDefault();

    let index = -1;
    index = this.state.slotlist.findIndex(
        element => element.session_start === this.state.session_start && element.session_end==this.state.session_end
    );
    console.log(index);
     if(index >=0){
       //this.props.resetState();
  // this.state.owner="";
        this.setState({session_end:""})
        this.setState({session_start:""})
        this.setState({tog:true})
        this.setState({message:"please select different start and end time !!!error"})
     }

     else{




       axios.post('http://127.0.0.1:8000/addSlots/', 
        this.state).then(() => {
      //this.props.resetState();
      //this.props.toggle();
      this.setState({session_end:""})
      this.setState({session_start:""})
      this.setState({tog:true})
      this.setState({message:""})

    });
}
  };



//   defaultIfEmpty = value => {
//     return value === "" ? "" : value;
//   };

  render() {
    // let optionItems = this.state.slots_avilable.map(slots =>
    // <option key={slots.id} name="session_slot" value={slots.id}>{slots.session_start}-{slots.session_end}</option>
    // );
    console.log(this.state.session_end);

    const yesterday = subDays(new Date(), 1);
    
    const isValidDate = function (current) {
          return isAfter(current, yesterday);
    }; 

    return (
      <Form onSubmit={this.createslot}>
        {/* <FormGroup> */}
          {/* <Label for="description">Description:</Label> */}
          <span>
          <DateTime
            name="start"
            value={this.state.session_start} 
            onChange={this.setValue}
            isValidDate={isValidDate}
            placeholder="start session date"
          />
          <DateTime
            name="end"
            value={this.state.session_end} 
            onChange={this.setValue1}
            isValidDate={isValidDate}
            placeholder="end session date"
          />
        {/* </FormGroup> */}

        <Button >Add Slot</Button>
        <p style={{color:"red"}}>{this.state.message}</p>
        </span>
      </Form>
    );
  }
}

export default Slot;