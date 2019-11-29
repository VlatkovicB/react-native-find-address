import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../Constants";

export const addBookmark = (bookmark, callback = null) => dispatch => {
  dispatch({ type: ADD_BOOKMARK, bookmark });
  callback();
};

export const removeBookmark = id => dispatch => {
  dispatch({ type: REMOVE_BOOKMARK, id });
};
