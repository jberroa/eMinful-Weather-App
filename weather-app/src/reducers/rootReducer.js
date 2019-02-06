import { combineReducers } from "redux";
import placesReducer from "./placesReducer";
import listReducer from "./cardReducer";
export default combineReducers({
  places: placesReducer,
  cities: listReducer
});
