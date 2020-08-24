// import React, { Component } from "react";
// import { Table } from "reactstrap";
// import axios from "axios";
// import App1 from "./App1";
// import RemovalSlot from "./RemovalSlot";


// class createTable extends Component {
//     state = {
//         slot: []
//       };
    
//       componentDidMount() {
//         this.resetState();
//       }
    
//       getSession = () => {
//         axios.get('http://127.0.0.1:8000/students_slots/').then(res => this.setState({ slot: res.data }));
//         console.log(this.state.slot);
//     };
    
//       resetState = () => {
//         this.getSession();
//       };

  
//   render() {
//     return (
//       <div>  
//       <Table dark>
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Subject</th>
//             <th>Description</th>
//             <th>Session Start Time</th>
//             <th>Session End Time</th>
            

//           </tr>
//         </thead>
//         <tbody>
//           {!this.state.slot || this.state.slot.length <= 0 ? (
//             <tr>
//               <td colSpan="2" align="center">
//                 <b>Oops, no one here yet</b>
//               </td>
//             </tr>
//           ) : (
//             this.state.slot.map(st => (
//               <tr key={st.id}>
//                 <td>{st.owner}</td>
//                 <td>{st.subject}</td>
//                 <td>{st.description}</td>
//                 <td>{st.slotstart}</td>
//                 <td>{st.slotend}</td>
//                 {/* {<td>{st.session}</td> }
//                  {st.session.map(mp =>(
//                      <p>{mp}</p>
//                  )
                 
                 
                 
//                  )
//                 } */}




//                 <td align="center">
//                   <RemovalSlot
//                     pk={st.id}
//                     resetState={this.resetState}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//       <App1 resetState={this.resetState}/>
//       </div>
//     );
//   }
// }

// export default createTable;