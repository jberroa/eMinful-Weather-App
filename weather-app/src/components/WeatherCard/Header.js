import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CitySection from "./CitySection";
import WeatherSection from "./WeatherSection";

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  border-bottom: 1px solid #bdbdbd;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default class CardHeader extends Component {
  render() {
    const { city, removeCity } = this.props;
    return (
      <CardHeaderContainer>
        <CitySection id={city.id} name={city.name} removeCity={removeCity} />
        <WeatherSection weather={city.weather[0]} />
      </CardHeaderContainer>
    );
  }
}

CardHeader.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    weather: PropTypes.array
  }).isRequired,
  removeCity: PropTypes.func.isRequired
};
