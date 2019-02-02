import { GET_LOCATION } from "../actionTypes";
const initialState = { location: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};
