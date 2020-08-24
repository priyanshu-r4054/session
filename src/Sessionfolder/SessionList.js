import React, { Component } from "react";
import { Table } from "reactstrap";
import NewSessionModal from "./NewSessionModal";
import RemovalModal from "./RemovalModal";
import User from "./User"
import Slot from "./Slot";
class SessionList extends Component {
  state ={
    search: ""
  }
  onchange = event =>{
    this.setState({search: event.target.value})
  }

  render() {
    const sessions = this.props.session.filter(
      (session) => {
        return session.subject.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
      }
    );
    
    console.log(this.props.session);
    return (
      <div>
        <Slot/>
        <input name="search" placeholder="Enter subject Name" value={this.state.search} onChange={this.onchange}/>
        
      <Table dark>
        <thead>
          <tr>
            {/* <th>User</th> */}
            <th>Subject</th>
            <th>Description</th>
            <th>Session Start Time</th>
            <th>Session End Time</th>
          </tr>
        </thead>
        <tbody>
          {!sessions || sessions.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no sessions yet!!</b>
              </td>
            </tr>
          ) : (
            sessions.map(session => (
              <tr key={session.id}>
                {/* <td>{session.owner}</td> */}
                <td>{session.subject}</td>
                <td>{session.description}</td>
                <td>{session.slotstart}</td>
                <td>{session.slotend}</td>
                <td align="center">
                  <NewSessionModal
                    create={false}
                    session={session}
                    resetState={this.props.resetState}
                    ro={this.props.session}
                  />
                  &nbsp;&nbsp;
                  <RemovalModal
                    pk={session.id}
                    resetState={this.props.resetState}
                    token={this.props.token}
                  />
                  &nbsp;&nbsp;
                  <User 
                    pk={session.id}
                    resetState={this.props.resetState}
                    token={this.props.token}
                  />  

                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default SessionList;