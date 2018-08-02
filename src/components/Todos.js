import React, { Component } from "react";
import List from "./List";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add todo" />
        <button>Add Todo</button>
        <List />
      </React.Fragment>
    );
  }
}

export default Todos;
