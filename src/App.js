import React, { Component } from "react";
import { createStore } from "redux";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { handleInitialData } from "./actions/shared";
import combineReducers from "./reducers/index";
import applyMiddleware from "./middleware/index";

const store = createStore(combineReducers, applyMiddleware);

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
