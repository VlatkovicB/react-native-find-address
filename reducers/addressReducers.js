import { ADD_BOOKMARK, REMOVE_BOOKMARK, FIND_ADDRESS } from "../Constants";
import { v4 } from "uuid";

export default function(
  state = [
    {
      address: "21 Coral ST",
      city: "Beach Haven",
      key: v4(),
      latitude: 39.56023300000004,
      latitudeDelta: 0.0041,
      longitude: -74.23776999999984,
      longitudeDelta: 0.0038,
      postal: "08008",
      state: "NJ"
    },
    {
      address: "21 Coral ST",
      city: "Beach Haven",
      key: v4(),
      latitude: 39.56023300000004,
      latitudeDelta: 0.0041,
      longitude: -74.23776999999984,
      longitudeDelta: 0.0038,
      postal: "08008",
      state: "NJ"
    },
    {
      address: "21 Coral ST",
      city: "Beach Haven",
      key: v4(),
      latitude: 39.56023300000004,
      latitudeDelta: 0.0041,
      longitude: -74.23776999999984,
      longitudeDelta: 0.0038,
      postal: "08008",
      state: "NJ"
    }
  ],
  action
) {
  switch (action.type) {
    case FIND_ADDRESS:
      locations = action.payload.data.candidates;

      const { address, city, postal } = action.payload.address;
      // 'state' name variable mixes with this state
      const stateFromPayload = action.payload.address.state;

      if (locations.length > 0) {
        location = {
          longitude: locations[0].location.x,
          latitude: locations[0].location.y,
          longitudeDelta: 0.0038,
          latitudeDelta: 0.0041,
          key: v4(),
          address,
          city,
          postal,
          state: stateFromPayload
        };
      }

      return location;
    case ADD_BOOKMARK:
      console.log("reducer");
      console.log(state);
      return [...state, action.bookmark];
    case REMOVE_BOOKMARK:
      console.log("reducer");
      console.log(action.id);
      console.log(state);
      return state.filter(item => item.key !== action.id);
    default:
      return state;
  }
}
