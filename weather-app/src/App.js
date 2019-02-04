import React, { Component } from "react";
import HeaderContainer from "./components/Header/header";
import { connect } from "react-redux";
import { getSuggestions, setSuggestions } from "./actions/placesActions";
import { addItem, getWeather, getCityLocation } from "./actions/listActions";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  getSuggestions: city => dispatch(getSuggestions(city)),
  addCity: city => dispatch(addItem(city)),
  setSuggestions: payload => dispatch(setSuggestions(payload)),
  getWeather: city => dispatch(getWeather(city)),
  getCityLocation: placeId => dispatch(getCityLocation(placeId))
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
        {/* <MyMapComponent /> */}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
