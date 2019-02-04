import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_WEATHER,
  UPDATE_LOCATION
} from "../actionTypes";
import moment from "moment";

const initialState = { list: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case UPDATE_WEATHER: {
      const tempList = [...state.list];
      const i = tempList.length;

      const distinctDays = Array.from(
        new Set(
          action.payload.map(item => item.dt_txt.split(" ", 1).toString())
        )
      ).map(date => {
        let item = action.payload.find(
          item => item.dt_txt.split(" ", 1).toString() === date
        );
        return {
          date: moment(date).format("MMM Do"),
          High: item.main.temp_max,
          low: item.main.temp_min,
          description: item.weather["0"].description
        };
      });

      tempList[i - 1].city.weather = distinctDays;
      return {
        ...state,
        list: tempList
      };
    }
    case UPDATE_LOCATION: {
      const tempList = [...state.list];
      const i = tempList.length;
      tempList[i - 1].city.name = action.payload.name;
      tempList[i - 1].city.location = action.payload.location;
      return {
        ...state,
        list: tempList
      };
    }
    case REMOVE_ITEM:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
