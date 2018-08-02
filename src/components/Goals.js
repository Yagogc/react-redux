import React, { Component } from "react";
import List from "./List";

import { addGoalAction, removeGoalAction } from "../state/Actions";
import generateId from "../utils/generateId";
class Goals extends Component {
  textInput = React.createRef();

  addGoal = () => {
    const name = this.input.value;
    if (!name) {
      return;
    }
    this.input.value = "";
    this.props.store.dispatch(
      addGoalAction({
        id: generateId(),
        name
      })
    );
  };

  removeItem = goal => {
    this.props.store.dispatch(removeGoalAction(goal.id));
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
