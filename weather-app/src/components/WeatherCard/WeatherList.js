import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WeatherSection from "./WeatherSection";

const WeatherListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export default class WeatherList extends Component {
  WeatherList = weather => {
    let length = weather.length - 1;
    return weather.map((weather, index) => {
      return index !== length ? (
        <WeatherSection key={index} weather={weather} BorderBottom={true} />
      ) : (
        <WeatherSection key={index} weather={weather} />
      );
    });
  };
  render() {
    const { weather } = this.props;

    return (
      <WeatherListContainer>{this.WeatherList(weather)}</WeatherListContainer>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.array.isRequired
};
