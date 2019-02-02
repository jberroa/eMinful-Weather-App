import React, { Component } from "react";
import HeaderContainer from "./components/Header/header";
import { connect } from "react-redux";
import { simpleAction } from "./actions/locationActions";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <React.Fragment>
        <HeaderContainer />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
