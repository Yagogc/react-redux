import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { todos, goals, loading } from "./state/Reducers";
import { handleInitialData } from "./actions/shared";

const store = createStore(
  combineReducers({
    todos,
    goals,
    loading
  }),
  applyMiddleware(ReduxThunk, logger)
);

class App extends Component {
  componentDidMount() {
    store.dispatch(handleInitialData());
    store.subscribe(() => this.forceUpdate());
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
