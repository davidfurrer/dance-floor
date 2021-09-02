import React, { Component } from "react";

import "./styles.css";

class Cell extends Component {
  render() {
    return (
      <div
        className="Cell"
        style={{ backgroundColor: this.props.colorCell }}
      ></div>
    );
  }
}

export default Cell;
