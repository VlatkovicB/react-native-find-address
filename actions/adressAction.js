import axios from "axios";
import qs from "qs";

const ROOT_URL =
  "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Locators/ESRI_Geocode_USA/GeocodeServer/findAddressCandidates?";

const buildUrl = info => {
  const query = qs.stringify({
    Address: info.address,
    City: info.city,
    State: info.state,
    Zip: info.postal,
    f: pjson
  });
  return `${ROOT_URL}${query}`;
};
