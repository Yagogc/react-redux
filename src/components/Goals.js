import React, { Component } from "react";
import List from "./List";

import { handleDeleteGoal, handleAddGoal } from "../state/Actions";
class Goals extends Component {
  textInput = React.createRef();

  addGoal = () => {
    let name = this.input.value;
    if (!name) {
      return;
    }
    this.props.store.dispatch(handleAddGoal(name, () => (name = "")));
  };

  removeItem = goal => {
    this.props.store.dispatch(handleDeleteGoal(goal));
  };

  render() {
    return (
      <React.Fragment>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
        />
        <button onClick={() => this.addGoal()}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem} />
      </React.Fragment>
    );
  }
}

export default Goals;
