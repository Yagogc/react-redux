import React, { Component } from "react";
import List from "./List";
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction
} from "../state/Actions";
import API from "../utils/api";

class Todos extends Component {
  addTodo = () => {
    const name = this.input.value;
    if (!name) {
      return;
    }

    return API.saveTodo(name)
      .then(todo => {
        this.props.store.dispatch(addTodoAction(todo));
        this.input.value = "";
      })
      .catch(() => {
        alert("An error ocurred please try again");
      });
  };

  removeItem = todo => {
    this.props.store.dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id)
      .then(() => {
        console.log("todo removed from db");
      })
      .catch(() => {
        this.props.store.dispatch(addTodoAction(todo));
        alert("An error ocurred please try again");
      });
  };

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id).catch(() => {
      console.log("Failed to update the DB");
      this.props.store.dispatch(toggleTodoAction(id));
    });
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
