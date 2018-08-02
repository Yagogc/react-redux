import React, { Component } from "react";
import List from "./List";
import { addTodoAction } from "../state/Actions";
import generateId from "../utils/generateId";

class Todos extends Component {
  addTodo = e => {
    const name = this.input.value;
    this.input.value = "";

    this.props.store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false
      })
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add todo"
          ref={input => (this.input = input)}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <List items={this.props.todos} />
      </React.Fragment>
    );
  }
}

export default Todos;
