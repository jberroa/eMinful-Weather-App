import axios from "axios";
import { placesAPIKey } from "../APIKeys";
import { GET_SUGGESTIONS, SET_ERROR, SET_SUGGESTIONS } from "../actionTypes";

export const getSuggestions = city => dispatch => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=
        ${city}&types=(cities)&key=
        ${placesAPIKey}`
    )
    .then(response => {
      console.log(response);

      dispatch({ type: GET_SUGGESTIONS, payload: response.data });
    })
    .catch(error => dispatch({ type: SET_ERROR, payload: error }));
};

export const setSuggestions = suggestions => dispatch => {
  dispatch({ type: SET_SUGGESTIONS, payload: suggestions });
};
