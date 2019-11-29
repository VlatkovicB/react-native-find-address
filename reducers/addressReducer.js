import { FIND_ADDRESS } from "../Constants";
import { v4 } from "uuid";

export default function(state = [], action) {
  switch (action.type) {
    case FIND_ADDRESS:
      locations = action.payload.data.candidates;

      if (locations.length > 0) {
        location = {
          longitude: locations[0].location.x,
          latitude: locations[0].location.y,
          longitudeDelta: 0.0038,
          latitudeDelta: 0.0041,
          id: v4(),
          address: action.payload.address
        };
      }
      return location;
    default:
      return state;
  }
}
