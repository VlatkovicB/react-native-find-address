import axios from "axios";
import qs from "qs";
import { FIND_ADDRESS } from "../Constants";

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
    console.log(url);
    dispatch({ type: FIND_ADDRESS, payload: data });
    callback();
  } catch (e) {
    console.log(e);
  }
};
