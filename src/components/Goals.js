import React, { Component } from "react";
import List from "./List";

import { addGoalAction, removeGoalAction } from "../state/Actions";
import generateId from "../utils/generateId";
import API from "../utils/api";
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
    return API.deleteGoal(goal.id)
      .then(() => {
        console.log("todo removed from db");
      })
      .catch(() => {
        this.props.store.dispatch(addGoalAction(goal));
        alert("An error ocurred please try again");
      });
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
