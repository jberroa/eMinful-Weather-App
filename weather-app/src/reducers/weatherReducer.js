import { GET_SUGGESTIONS, SET_ERROR, SET_SUGGESTIONS } from "../actionTypes";

const initialState = { suggestions: {}, error: "" };

var getCity = value => {
  return value.description;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload.predictions.map(getCity)
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: {}
      };
    default:
      return state;
  }
};
