import axios from "axios";
import { placesAPIKey, yahooAPIKey } from "../APIKeys";
import { ADD_ITEM, UPDATE_WEATHER, UPDATE_LOCATION } from "../actionTypes";

export const addItem = city => dispatch => {
  //add new city object
  //add place object
  //add weather object

  dispatch({
    type: ADD_ITEM,
    payload: {
      city: { name: "", location: {}, weather: {} }
    }
  });

  // let placeDetails = getPlaceDetails(
  //   city.split(",", 2).map(item => {
  //     return item.trim();
  //   })
  // );
};

export const getWeather = city => dispatch => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=
          ${city}&APPID=${yahooAPIKey}&units=imperial`
    )
    .then(response => {
      dispatch({
        type: UPDATE_WEATHER,
        payload: response.data.list
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getCityLocation = id => dispatch => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${placesAPIKey}&fields=geometry,formatted_address`
    )
    .then(response => {
      dispatch({
        type: UPDATE_LOCATION,
        payload: {
          name: response.data.result.formatted_address,
          location: response.data.result.geometry.location
        }
      });
    })
    .catch(error => console.log(error));
};
