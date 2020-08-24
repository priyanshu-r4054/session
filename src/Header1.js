import React, { Component } from "react";

class Header1 extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2017/08/10191141/Better-Toppr-Logo-300x267.jpg"
          width="150"
          className="img-thumbnail"
          style={{ marginTop: "20px"}}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>Please select the session</h1>
      </div>
    );
  }
}

export default Header1;