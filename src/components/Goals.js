import React, { Component } from "react";
import List from "./List";

class Goals extends Component {
  textInput = React.createRef();

  addGoal = () => {
    console.log(this.textInput.current.value);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Goal List</h1>
        <input type="text" placeholder="Add Goal" ref={this.textInput} />
        <button onClick={() => this.addGoal()}>Add Goal</button>
        <List />
      </React.Fragment>
    );
  }
}

export default Goals;
