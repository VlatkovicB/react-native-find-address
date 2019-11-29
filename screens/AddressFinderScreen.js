import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { FOREGROUND, THEME, OSWALD_REGULAR } from "../Constants";

export default class AddressFinderScreen extends Component {
  static navigationOptions = {
    title: "Address Finder"
  };

  handlePress = route => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Find Address"
            onPress={() => this.handlePress("find")}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Bookmarks"
            onPress={() => this.handlePress("bookmarks")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME
  },

  buttonStyle: {
    borderRadius: 3,
    marginVertical: 16,
    backgroundColor: FOREGROUND
  },
  titleStyle: {
    color: THEME,
    fontFamily: OSWALD_REGULAR
  },
  buttonContainer: {
    position: "absolute",
    marginVertical: 15,
    left: 20,
    right: 20
  }
});
