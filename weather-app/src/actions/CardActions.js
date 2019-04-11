import axios from "axios";
import { placesAPIKey, yahooAPIKey } from "../APIKeys";
import { ADD_ITEM, REMOVE_ITEM, SET_ERROR } from "../actionTypes";
import moment from "moment";

export const addItem = city => dispatch => {
  dispatch(getCityLocation(city));
};

export const getCityLocation = city => dispatch => {
  axios
    .get(
      `maps/api/place/details/json?placeid=${
        city.placeId
      }&key=${placesAPIKey}&fields=geometry,formatted_address,address_component`
    )
    .then(response => {
      dispatch(getWeather(response.data, city.uniqueId));
    })

    .catch(error => dispatch({ type: SET_ERROR, payload: error }));
};

export const getWeather = (city, uniqueId) => dispatch => {
  const location = city.result.geometry.location;
  axios
    .get(
      `/data/2.5/forecast?lat=${location.lat}&lon=${
        location.lng
      }&APPID=${yahooAPIKey}&units=imperial`
    )
    .then(response => {
      const name = getCityName(city.result.address_components);
      dispatch({
        type: ADD_ITEM,
        payload: {
          id: uniqueId,
          name: name,
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

            let tempDate = moment(date).format("MMM Do");
            let TodayDate = moment().format("MMM Do");

            if (tempDate === TodayDate) tempDate = "Today";
            return {
              date: tempDate,
              high: Math.round(item.main.temp_max),
              low: Math.round(item.main.temp_min),
              description: item.weather["0"].description
            };
          }),
          location: location
        }
      });
    })
    .catch(error => {
      dispatch({ type: SET_ERROR, payload: error });
    });
};

export const removeItem = id => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    id: id
  });
};

export const getCityName = addressComponents => {
  let name = addressComponents
    .filter(x => {
      return (
        x.types[0] === "locality" ||
        x.types[0] === "administrative_area_level_1"
      );
    })
    .map(x => x.short_name);
  name[1] = " " + name[1];
  return name.toString();
};
