import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardWeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-bottom: ${props => (props.BorderBottom ? "1px solid #bdbdbd" : "")};

  justify-content: space-around;
`;

const WeatherDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
`;
const DateAndWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  flex: 1;
`;

const DateText = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const TemperatureText = styled.h3`
  font-size: 22px;
  font-weight: 700;
  flex: 1;
`;

const WeatherDescriptionText = styled.h3`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
`;
export default class WeatherSection extends Component {
  render() {
    const { weather, BorderBottom } = this.props;
    return (
      <CardWeatherContainer BorderBottom={BorderBottom}>
        <WeatherDetails>
          <DateAndWeatherContainer>
            <DateText>{weather.date}</DateText>
            <WeatherDescriptionText>
              {weather.description}
            </WeatherDescriptionText>
          </DateAndWeatherContainer>
        </WeatherDetails>
        <TemperatureText>{"High: " + weather.high}</TemperatureText>
        <TemperatureText>{"Low: " + weather.low}</TemperatureText>
      </CardWeatherContainer>
    );
  }
}

WeatherSection.propTypes = {
  weather: PropTypes.object.isRequired
};
