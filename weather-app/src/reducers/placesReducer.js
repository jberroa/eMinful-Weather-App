import {
  GET_SUGGESTIONS,
  SET_ERROR,
  SET_CITY,
  SET_SUGGESTIONS
} from "../actionTypes";

const initialState = { suggestions: {}, error: "", tempCity: {} };

var getCity = value => {
  return { city: value.description, id: value.id, placeId: value.place_id };
};

var getCityDetails = value => {
  let { formatted_address, geometry } = value;

  return {
    city: {
      Name: formatted_address,
      lng: geometry.location.lng,
      lat: geometry.location.lat
    }
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload.predictions.map(getCity)
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SET_CITY:
      return {
        ...state,
        city: getCityDetails(action.payload.result)
      };
    default:
      return state;
  }
};
