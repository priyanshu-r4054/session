import React,{ useState }  from "react";
import { Component, Fragment } from "react";
import Login from "./Login"
import createTable from "./createTable"

class student extends Component{
//   const [token, setToken] = useState('');
//   const [staff, setStaff] = useState(false);

//   const userLogin = (tok) => {
//     setToken(tok);
//   }
//   const adminstaff = (st) => {
//     setStaff(st)
//   }
//   console.log(staff);
  
 render(){
  return (
    <Fragment>
        <Login/>
        <createTable/>  
    </Fragment>
  );
 }
}

export default student;