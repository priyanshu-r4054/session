import React, { Component } from "react";
import { Table } from "reactstrap";
// import NewSessionModal from "./NewSessionModal";
// import RemovalModal from "./RemovalModal";
// import User from "./User"
// import Slot from "./Slot";
import RemovalSlot from "./RemovalSlot";
class SlotT extends Component {

  render() {
    const slot = this.props.check === true ? (this.props.slot) :(
    this.props.slot.filter(
      (session) => {
        return session.owner.toLowerCase().indexOf(this.props.user) !==-1;
      }
    )
    )
    // const slot = (data) => 
    // Object.keys(data).reduce((slot, key) => {
    //     (!~slot.indexOf(data[key].slotstart)) &&
    //         slot.push(data[key].slotstart);
    //     return slot
    // }, [])

    
    return (
      <div>
      <Table dark>
      <thead>
          <tr>
            <th>User</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Session Start Time</th>
            <th>Session End Time</th>
          </tr>
        </thead>
        <tbody>
          {!slot || slot.length <= 0 ? (
            <tr>
              <td colSpan="2" align="center">
                <b>Oops, no one here yet</b>
              </td>
            </tr>
          ) : (
            slot.map(st => (
              <tr key={st.id}>
                <td>{st.owner}</td>
                <td>{st.subject}</td>
                <td>{st.description}</td>
                <td>{st.slotstart}</td>
                <td>{st.slotend}</td>
                {/* {<td>{st.session}</td> }
                 {st.session.map(mp =>(
                     <p>{mp}</p>
                 )
                 
                 
                 
                 )
                } */}




                <td align="center">
                  <RemovalSlot
                    pk={st.id}
                    resetState={this.props.resetState}
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

export default SlotT;