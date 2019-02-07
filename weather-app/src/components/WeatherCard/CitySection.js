import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../../common/Button";

const RemoveButton = styled(Button)`
  align-self: center;
  max-height: 40px;
  width: 8rem;
  padding: 5px;
`;

const CityText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  align-self: center;
  margin: 0 10px;
`;

const CardCityContainer = styled.div`
  display: flex;
  flex-direction: row;

  flex: 1;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;
export default class CitySection extends Component {
  render() {
    const { name, id, removeCity } = this.props;
    return (
      <CardCityContainer>
        <CityText>{name}</CityText>
        <RemoveButton onClick={() => removeCity(id)} danger>
          remove
        </RemoveButton>
      </CardCityContainer>
    );
  }
}
CitySection.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeCity: PropTypes.func.isRequired
};
