import { combineReducers } from "redux";
import location from "./addressReducer";
import bookmarks from "./bookmarkReducer";

export default combineReducers({
  location,
  bookmarks
});
