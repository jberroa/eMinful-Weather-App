import axios from "axios";
import { yahooAPIKey } from "../APIKeys";
import { GET_SUGGESTIONS, SET_ERROR, SET_SUGGESTIONS } from "../actionTypes";

export const getWeather = city => dispatch => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        +city +
        "&APPID=" +
        yahooAPIKey
    )
    .then(response => {
      console.log(response);

      dispatch({ type: GET_SUGGESTIONS, payload: response.data });
    })
    .catch(error => dispatch({ type: SET_ERROR, payload: error }));
};

export const setSuggestions = () => dispatch => {
  dispatch({ type: SET_SUGGESTIONS, payload: {} });
};
