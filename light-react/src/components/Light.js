import React, { Component } from "react";
import classNames from "classname"

import './Light.css';
const RED = 1;
const GREEN = 2;
const ORANGE = 3;

class Light extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      // this.changeState();
    }, 1000);

    this.changeState = this.changeState.bind(this);
  }

  nextColor(color) {
    let str = null;
    if (color === RED) {
      str = GREEN;
    } else if (color === GREEN) {
      str = ORANGE;
    } else {
      str = RED;
    }
    return str;
  }

  changeState() {
    this.setState({
      currentColor: this.nextColor(this.state.currentColor)
    });
    console.log(this.state.currentColor);
  }

  render() {
    return (
      <div>
        <div className={classNames('icon red',
          {'active':this.state.currentColor === 1})} />
        <div className={classNames('icon green',
          {'active':this.state.currentColor === 2})} />
        <div className={classNames('icon orange',
          {'active':this.state.currentColor === 3})} />
        <button onClick={this.changeState}>Change</button>
      </div>
    );
  }
}

export default Light;
