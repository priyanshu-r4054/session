import React, { Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Home from "./Home";
class Login extends Component {

  state = {
    session: [],
    credentials: {username: '', password: ''},
    token: "",
    check: false
  };
  login = e => {
    axios.post('http://127.0.0.1:8000/api-auth/', 
    this.state.credentials
    )
    .then(
      data => {
       // this.props.userLogin(data.token);
        this.setState({token:data.token})
        let index = -1;
        index = this.state.session.findIndex(
            element => element.username === this.state.credentials.username && element.is_staff === true
        );
        if(index >=0){
            this.setState({check:true})
        }        
        console.log(data);
      }
    )
    .catch( error => console.error(error))
  }
  logout = e => {
    this.setState({check:false})
  }
  


  componentDidMount() {
    this.resetState();
  }

  getSession = () => {
    axios.get('http://127.0.0.1:8000/user/'
    ).then(res => this.setState({session:res.data}));
   // console.log(this.state.session)
  };

  resetState = () => {
    this.getSession();
  };
  

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
   
  }

  
  render() {
    // console.log(this.state.session)
    // console.log(this.state.credentials)
    
    //const users=admin[0];  
     // this.props.adminstaff(admin[0].is_staff);  
     //console.log(users.email);
    //  if(this.state.token !== ""){
    //  const admin = this.state.session.filter(
    //     (session) => {
    //     return (session.username.indexOf(this.state.credentials.username) !==-1);
    //     }
    //   );
    // }
     

    console.log(this.state.check)

    return (
        
      <div>
        {this.state.check === false ? (
    <div>
       <h1>Login user form</h1>
        <label>
          Username:
          <input type="text" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button onClick={this.login}>Login</button>
    </div>
  ) : (
      <div>
          <button onClick={this.logout}>Logout</button> 
            <Header/>
            <Home/>
      </div>
    

  )
}
      </div>
    );
    }
}

export default Login;


