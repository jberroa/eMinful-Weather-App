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
    if (!this.currentCityExist()) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getPlaceIdByGeoCode(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        error => {
          this.setError(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000
        }
      );
    } else {
      this.setState({ isLoaded: true });
    }
  }

  currentCityExist = () => {
    let item = this.props.cities.find(item => {
      if (item.id === -10) return true;
      return false;
    });
    return item ? true : false;
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
          this.props.addCity({
            placeId: response.data.results[0].place_id,
            uniqueId: -10
          })
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
