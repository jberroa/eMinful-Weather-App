import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CardMainSection from "./MainSection";
import CardHeader from "./Header";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  margin: 10px auto;
  min-width: 300px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

/*  with media query width: 100%;*/

export default class WeatherCard extends Component {
  render() {
    const { city } = this.props;
    return (
      <MainContainer>
        <CardContainer>
          <CardHeader {...this.props} />
          <CardMainSection location={city.location} weather={city.weather} />
        </CardContainer>
      </MainContainer>
    );
  }
}

WeatherCard.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    weather: PropTypes.array
  }).isRequired,
  removeCity: PropTypes.func.isRequired
};
