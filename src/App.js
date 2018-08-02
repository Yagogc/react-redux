import React, { Component } from "react";
import Goals from "./components/Goals";
import Todos from "./components/Todos";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Todos />
        <Goals />
      </React.Fragment>
    );
  }
}

export default App;
