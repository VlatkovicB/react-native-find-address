import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../Constants";
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
      address: "1",
      city: "los angeles",
      key: v4(),
      latitude: 34.05218700000012,
      latitudeDelta: 0.0041,
      longitude: -118.243425,
      longitudeDelta: 0.0038,
      postal: "90000",
      state: "CA"
    }
  ],
  action
) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.bookmark];
    case REMOVE_BOOKMARK:
      return state.filter(item => item.key !== action.id);
    default:
      return state;
  }
}
