import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label} from "reactstrap";
import Select from 'react-select';
import axios from 'axios';

export default class App1 extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      value:[],
      owner: this.props.owner1,
      session:0
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addsession = e => {
   // console.log(this.state.session);
   let index = -1;
        index = this.props.slot.findIndex(
            element => element.owner === this.state.owner && element.session === this.state.session
        );
    e.preventDefault();
    if(index >=0){
      this.props.resetState();
      // this.state.owner="";
       this.state.value=[];
    }


    else { 
    axios.post('http://127.0.0.1:8000/students_slots/', this.state
    ).then(() => {
       this.props.resetState();
      // this.state.owner="";
       this.state.value=[];
    });
  }
  };
  async getOptions(){
    const res = await axios.get('http://127.0.0.1:8000/sessions/')
    const data = res.data
    //console.log(data)
    const options = data.map(d => ({
      "value" : d.id,
      "label" : "" + d.id + "::"+d.subject + ":" + d.description

    })) 


    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({session:e.value})
   //this.setState({owner:this.props.user}) 
  }
       


  componentDidMount(){
      this.getOptions()
  }

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };


  render() {
    // console.log(this.state.value);
    // this.state.session=this.state.value.map(v =>{
    //     if (v.value==""){
    //         return ("")
    //     }
    //     return(v.value)
    // }); 
    // console.log(this.state.session);
    return (
        <div>
        <Form onSubmit={this.addsession}>
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
           <Label for="xyz">SelectSession:</Label> 
           <div>
           <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}/>
           </div>
        </FormGroup>
        <Button>Send</Button>
       </Form>
       </div>
       
    )
  }
  
}











  