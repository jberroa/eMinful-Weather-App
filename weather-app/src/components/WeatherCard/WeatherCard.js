import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  width: 95%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: ghostwhite;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export default class WeatherCard extends Component {
  render() {
    return (
      <MainContainer>
        <CardContainer>
          <h1>hello</h1>
        </CardContainer>
        <CardContainer>
          <h1>hello</h1>
        </CardContainer>
      </MainContainer>
    );
  }
}
