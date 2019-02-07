import React, { Component } from "react";
import styled from "styled-components";
import MapSection from "./MapSection";
import WeatherList from "./WeatherList";
import PropTypes from "prop-types";

const CardMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default class CardMainSection extends Component {
  render() {
    const { location, weather } = this.props;
    return (
      <CardMainContainer>
        <WeatherList weather={weather} />
        <MapSection location={location} />
      </CardMainContainer>
    );
  }
}
CardMainSection.propTypes = {
  location: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired
};
