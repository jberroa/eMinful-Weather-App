import { GET_SUGGESTIONS, SET_ERROR, SET_SUGGESTIONS } from "../actionTypes";

const initialState = { suggestions: {}, error: "" };

var getCity = value => {
  return { city: value.description, id: value.id, placeId: value.place_id };
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
    default:
      return state;
  }
};
