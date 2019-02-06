import axios from "axios";
import { placesAPIKey, yahooAPIKey } from "../APIKeys";
import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";
import moment from "moment";

export const addItem = city => dispatch => {
  dispatch(getCityLocation(city.placeId));
};

export const getCityLocation = id => dispatch => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${placesAPIKey}&fields=geometry,formatted_address`
    )
    .then(response => {
      dispatch(getWeather(response.data));
    })
    .catch(error => console.log(error));
};

export const getWeather = city => dispatch => {
  const location = city.result.geometry.location;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        city.result.formatted_address
      }&APPID=${yahooAPIKey}&units=imperial`
    )
    .then(response => {
      const name = city.result.formatted_address.split(",", 2).toString();
      dispatch({
        type: ADD_ITEM,
        payload: {
          id: {},
          name: name.substring(0, name.indexOf(",") + 4),
          weather: Array.from(
            new Set(
              response.data.list.map(item =>
                item.dt_txt.split(" ", 1).toString()
              )
            )
          ).map(date => {
            let item = response.data.list.find(
              item => item.dt_txt.split(" ", 1).toString() === date
            );
            return {
              date: moment(date).format("MMM Do"),
              High: Math.round(item.main.temp_max),
              low: Math.round(item.main.temp_min),
              description: item.weather["0"].description
            };
          }),
          location: location
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeItem = id => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    id: id
  });

  // let placeDetails = getPlaceDetails(
  //   city.split(",", 2).map(item => {
  //     return item.trim();
  //   })
  // );
};
