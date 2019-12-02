import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as Font from "expo-font";
import { Icon } from "react-native-elements";

import { Provider } from "react-redux";
import store from "./store";

import AddressFinderScreen from "./screens/AddressFinderScreen";
import ViewAddressScreen from "./screens/ViewAddressScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import FindAddressScreen from "./screens/FindAddressScreen";
import { THEME, OSWALD_REGULAR, FOREGROUND } from "./Constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf"),
      "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf")
    });

    this.setState({ loaded: true });
  }

  render() {
    const MainNavigator = createAppContainer(
      createStackNavigator(
        {
          home: AddressFinderScreen,
          view: ViewAddressScreen,
          bookmarks: BookmarksScreen,
          find: FindAddressScreen
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: THEME,
              elevation: 0,
              shadowOpacity: 0
            },
            headerTitleStyle: {
              fontFamily: OSWALD_REGULAR,
              fontWeight: "200",
              color: FOREGROUND,
              fontSize: 24
            },
            headerBackImage: (
              <Icon name="chevron-left" color={FOREGROUND} size={48} />
            )
          },
          initialRouteName: "home",
          headerLayoutPreset: "center"
        }
      )
    );
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
