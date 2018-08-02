import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { todos, goals } from "./state/Reducers";
import { logger } from "./state/Logger";
import API from "./utils/api";
import { receiveDataAction } from "./state/Actions";

const store = createStore(
  combineReducers({
    todos,
    goals
  }),
  applyMiddleware(logger)
);
class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    console.log(API);
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      console.log({ todos });
      console.log({ goals });
      store.dispatch(receiveDataAction(todos, goals));
    });
  }
  render() {
    const { todos, goals } = store.getState();
    return (
      <React.Fragment>
        <Todos store={store} todos={todos} />
        <Goals store={store} goals={goals} />
      </React.Fragment>
    );
  }
}

export default App;
