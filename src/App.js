import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { todos, goals, loading } from "./state/Reducers";
import { logger } from "./state/Logger";
import API from "./utils/api";
import { receiveDataAction } from "./state/Actions";

const store = createStore(
  combineReducers({
    todos,
    goals,
    loading
  }),
  applyMiddleware(logger)
);
class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      store.dispatch(receiveDataAction(todos, goals));
    });
  }
  render() {
    const { todos, goals, loading } = store.getState();

    if (loading === true) {
      return <h3>Loading...</h3>;
    }
    return (
      <React.Fragment>
        <Todos store={store} todos={todos} />
        <Goals store={store} goals={goals} />
      </React.Fragment>
    );
  }
}

export default App;
