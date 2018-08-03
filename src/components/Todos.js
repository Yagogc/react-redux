import React, { Component } from "react";
import List from "./List";
import {
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo
} from "../state/Actions";

class Todos extends Component {
  addTodo = () => {
    let name = this.input.value;
    if (!name) {
      return;
    }
    this.props.store.dispatch(handleAddTodo(name, () => (name = "")));
  };

  removeItem = todo => {
    this.props.store.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    this.props.store.dispatch(handleToggleTodo(id));
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
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </React.Fragment>
    );
  }
}

export default Todos;
