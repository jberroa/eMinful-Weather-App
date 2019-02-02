import axios from "axios";
import { placesAPIKey } from "../APIKeys";
export const simpleAction = () => dispatch => {
  axios.get(
    "https://maps.googleapis.com/maps/api/place/" +
      "autocomplete/json?input=winter&types=(cities)&key=" +
      placesAPIKey
  );
};
