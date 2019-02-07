import React, { Component } from "react";
import WeatherCard from "../components/WeatherCard/Card";

export default class WeatherCardListContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.cities.length !== nextProps.cities.length) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <React.Fragment>
        {this.props.cities.map((city, index) => (
          <WeatherCard
            key={index}
            city={city}
            removeCity={this.props.removeCity}
          />
        ))}
      </React.Fragment>
    );
  }
}
