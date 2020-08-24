import React, { Component} from 'react';
import axios from 'axios';
import Body from './body';
import Header1 from './Header1';
import Register from './register';
class App extends Component {

  state = {
    session: [],
    credentials: {username: '', password: ''},
    user: '',
    token: "",
    check: false
  };
  login = () => {
    axios.post('http://127.0.0.1:8000/api-auth/', 
    this.state.credentials
    )
    .then(
      data => {
       // this.props.userLogin(data.token);
        let index = -1;
        index = this.state.session.findIndex(
            element => element.username === this.state.credentials.username && element.is_staff === true
        );
        if(index >=0){
            this.setState({check:true})
        }     
        this.setState({user:this.state.credentials.username})   
        this.setState({token:data.token})

        //console.log(data);
      }
    )
    .catch( error => console.error(error))
  }
  logout = () => {
    this.setState({token:""})
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
    
     

    console.log(this.state.check)

    return (
        
      <div>
        {this.state.token === "" ? (
    <div>
       <h1>Student login form</h1>
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
        <Register resetState={this.resetState}/>

    </div>
  ) : (
      <div>
          <button onClick={this.logout}>Logout</button> 
          <Header1/>
          <Body user={this.state.user} check={this.state.check}/>
      </div>
    

  )
}
      </div>
    );
    }
}

export default App;