import React, { Component } from "react";

class Props extends Component {
  render() {
    let props_val = this.props.props_val;
    props_val += " from App.js";
    return (
      <div>
        <h2>[ THIS IS Props ]</h2>
        <p>props: {this.props.props_val}</p>
        <p>props: {props_val}</p>
      </div>
    );
  }
}

export default Props;
