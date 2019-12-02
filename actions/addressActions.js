import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  FIND_ADDRESS,
  VIEW_BOOKMARK
} from "../Constants";
import qs from "qs";
import axios from "axios";

const ROOT_URL =
  "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Locators/ESRI_Geocode_USA/GeocodeServer/findAddressCandidates?";
const buildUrl = address => {
  const query = qs.stringify({
    Address: address.address,
    City: address.city,
    State: address.state,
    Zip: address.postal,
    f: "pjson"
  });
  return `${ROOT_URL}${query}`;
};

export const findAddress = (address, callback = null) => async dispatch => {
  try {
    const url = buildUrl(address);
    let { data } = await axios.get(url);
    dispatch({ type: FIND_ADDRESS, payload: { data, address } });
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const addBookmark = (bookmark, callback = null) => dispatch => {
  dispatch({ type: ADD_BOOKMARK, bookmark });
  callback();
};

export const removeBookmark = id => dispatch => {
  dispatch({ type: REMOVE_BOOKMARK, id });
};

export const viewBookmark = (bookmark, callback = null) => dispatch => {
  dispatch({ type: VIEW_BOOKMARK, bookmark });
  callback();
};
