import { combineReducers } from "redux";
import bookmarks from "./addressReducers";
import location from "./locationReducer";

export default combineReducers({
  bookmarks,
  location
});
