import { FIND_ADDRESS } from "../Constants";

export default function(state = [], action) {
  switch (action.type) {
    case FIND_ADDRESS:
      locations = action.payload.candidates.filter(
        location => location.score === 100
      );

      if (locations.length > 0) {
        location = {
          longitude: locations[0].location.x,
          latitude: locations[0].location.y,
          longitudeDelta: 0.0038,
          latitudeDelta: 0.0041
        };
      }
      return location;
    default:
      return state;
  }
}
