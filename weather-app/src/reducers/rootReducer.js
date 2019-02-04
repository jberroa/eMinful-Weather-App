import { combineReducers } from "redux";
import placesReducer from "./placesReducer";
import listReducer from "./listReducer";
export default combineReducers({
  places: placesReducer,
  cities: listReducer
});
