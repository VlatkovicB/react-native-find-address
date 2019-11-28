import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AddressFinderScreen from "./screens/AddressFinderScreen";
import ViewAddressScreen from "./screens/ViewAddressScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import FindAddressScreen from "./screens/FindAddressScreen";
import { THEME } from "./Constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Oswald-Regular": require("./assets/fonts/Oswald-Regular.ttf")
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
              backgroundColor: THEME
            }
          },
          initialRouteName: "home"
        }
      )
    );
    if (this.state.loaded) {
      return <MainNavigator />;
    }
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
