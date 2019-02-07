import React, { Component } from "react";
import styled from "styled-components";
import { MyMapComponent } from "../GoogleMap/map";

const CardMap = styled.div`
  flex: 1;
`;

export default class MapSection extends Component {
  render() {
    const { location } = this.props;
    return (
      <CardMap>
        <MyMapComponent isMarkerShown lat={location.lat} lng={location.lng} />
      </CardMap>
    );
  }
}
