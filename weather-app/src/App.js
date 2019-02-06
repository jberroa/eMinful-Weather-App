import React, { Component } from "react";
import HeaderContainer from "./components/Header/header";
import { connect } from "react-redux";
import { getSuggestions, setSuggestions } from "./actions/placesActions";
import { addItem, removeItem } from "./actions/CardActions";
import CardContainer from "./containers/CardContainer";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  getSuggestions: city => dispatch(getSuggestions(city)),
  addCity: city => dispatch(addItem(city)),
  setSuggestions: payload => dispatch(setSuggestions(payload)),
  removeCity: id => dispatch(removeItem(id))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer {...this.props} />
        <CardContainer />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
