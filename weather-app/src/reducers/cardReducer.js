import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.payload.id = action.payload.id
        ? action.payload.id
        : state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return [...state, action.payload];

    case REMOVE_ITEM:
      return state.filter(city => city.id !== action.id);

    default:
      return state;
  }
};
