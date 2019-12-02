import { FIND_ADDRESS, VIEW_BOOKMARK } from "../Constants";
import { v4 } from "uuid";

export default function(state = [], action) {
  switch (action.type) {
    case VIEW_BOOKMARK:
      const { address, city, postal } = action.bookmark;
      location = {
        longitude: action.bookmark.longitude,
        latitude: action.bookmark.latitude,
        longitudeDelta: 0.0038,
        latitudeDelta: 0.0041,
        address,
        city,
        postal,
        state: action.bookmark.state
      };
      return location;
    case FIND_ADDRESS:
      locations = action.payload.data.candidates;

      if (locations.length != 0) {
        const { address, city, postal } = action.payload.address;

        location = {
          longitude: locations[0].location.x,
          latitude: locations[0].location.y,
          longitudeDelta: 0.0038,
          latitudeDelta: 0.0041,
          key: v4(),
          address,
          city,
          postal,
          state: action.payload.address.state
        };

        return location;
      }

      return null;
    default:
      return state;
  }
}
