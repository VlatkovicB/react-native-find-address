import { ADD_BOOKMARK, REMOVE_BOOKMARK, GET_BOOKMARKS } from "../Constants";
import { v4 } from "uuid";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
