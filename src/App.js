import React, { Component } from "react";
import Goals from "./components/Goals";
import Todos from "./components/Todos";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    if (loading === true) {
      return <h3>Loading...</h3>;
    }
    return (
      <React.Fragment>
        <Todos />
        <Goals />
      </React.Fragment>
    );
  }
}
export default connect(state => ({ loading: state.loading }))(App);
