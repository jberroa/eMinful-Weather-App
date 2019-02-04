import React, { Component } from "react";
import HeaderContainer from "./components/Header/header";
import { connect } from "react-redux";
import { getSuggestions, setSuggestions } from "./actions/suggestionsActions";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  getSuggestions: city => dispatch(getSuggestions(city)),
  setSuggestions: () => dispatch(setSuggestions())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  simpleAction = event => {
    this.props.GetLocation("winter park");
  };
  render() {
    return (
      <React.Fragment>
        <HeaderContainer {...this.props} />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
