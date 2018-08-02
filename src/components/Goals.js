import React, { Component } from "react";
import List from "./List";

import { addGoalAction } from "../state/Actions";
import generateId from "../utils/generateId";
class Goals extends Component {
  textInput = React.createRef();

  addGoal = () => {
    const name = this.input.value;
    this.input.value = "";
    this.props.store.dispatch(
      addGoalAction({
        id: generateId(),
        name
      })
    );
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
        <List items={this.props.goals} />
      </React.Fragment>
    );
  }
}

export default Goals;
