import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import App from './App'; 
//import App2 from './App2';
import React, { Component } from "react";
//import student from "./student"
import Login from './Login';
// import createTable1 from './createTable';
 //import createTable from './createTable';
//import './App.css'; 
// import Date1 from './Date'  
class Mainapp extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
                <Link to="/session">Session</Link> 
              </li> 
              <li> 
                <Link to="/student">Student_session</Link> 
              </li> 
            </ul> 
            <Switch> 
            <Route exact path='/student' component={App}></Route>

             <Route exact path='/session' component={Login}></Route> 
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default Mainapp; 