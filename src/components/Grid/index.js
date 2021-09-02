import React, { Component } from "react";
import Cell from "../Cell/index";

import "./styles.css";

class Grid extends Component {
  // initialize state of cells
  randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  getColorsArray = () => {
    const colorsArray = [];
    for (let index = 0; index < 25; index++) {
      colorsArray.push(this.randomColor());
    }
    return colorsArray;
  };

  state = { colors: this.getColorsArray() };

  randomizeColors = () => {
    this.setState({ colors: this.getColorsArray() });
  };

  sdf = setInterval(() => {
    this.randomizeColors();
  }, 300);

  render() {
    return (
      <div className="gridContainer">
        {this.state.colors.map((color) => {
          return <Cell colorCell={color} />;
        })}
      </div>
    );
  }
}

export default Grid;
