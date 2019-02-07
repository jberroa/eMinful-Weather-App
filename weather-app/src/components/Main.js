import React, { Component } from "react";
import HeaderContainer from "./Header/header";
import WeatherCardListContainer from "../containers/WeatherCardListContainer";
import axios from "axios";
import LoadingDots from "./Animation/LoadingDots";
import { geocodeAPIKey } from "../APIKeys";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        if (
          this.currentCityExist(
            position.coords.latitude,
            position.coords.longitude
          )
        ) {
          this.getPlaceIdByGeoCode(
            position.coords.latitude,
            position.coords.longitude
          );
        } else {
          this.setState({ isLoaded: true });
        }
      },
      error => {
        this.setError(error);
      }
    );
  }

  currentCityExist = (lat, lng) => {
    let length = this.props.cities.find(item => {
      if (item.location.lat === lat && item.location.lng === lng) return true;
      return false;
    });
    return length > 0;
  };

  getPlaceIdByGeoCode = (lat, lon) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat +
          "," +
          lon}&location_type=ROOFTOP&result_type=street_address&key=${geocodeAPIKey}`
      )
      .then(response => {
        this.setState(
          { isLoaded: true },
          this.props.addCity({ placeId: response.data.results[0].place_id })
        );
      })
      .catch(error => this.setState({ error: error.message }));
  };
  setError = error => {
    this.setState({ isLoaded: true, error: error.message });
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <React.Fragment>
        <HeaderContainer {...this.props} />
        {!isLoaded && <LoadingDots />}
        {isLoaded && this.props.cities.length === 0 && (
          <p>{this.state.error}</p>
        )}
        {isLoaded && (
          <WeatherCardListContainer
            cities={this.props.cities}
            removeCity={this.props.removeCity}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Main;
