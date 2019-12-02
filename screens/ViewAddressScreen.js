import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import { THEME, OSWALD_BOLD, ERROR, OSWALD_REGULAR } from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";
import { v4 } from "uuid";
import _ from "lodash";

class ViewAddressScreen extends Component {
  static navigationOptions = {
    title: "View Address"
  };

  constructor(props) {
    super(props);

    const {
      longitude,
      latitude,
      latitudeDelta,
      longitudeDelta
    } = this.props.location;

    this.state = {
      region: { longitude, latitude, latitudeDelta, longitudeDelta },
      buttonPressed: false
    };
  }

  handlePress = () => {
    const { address, postal, city, state } = this.props.location;
    const {
      longitude,
      latitude,
      latitudeDelta,
      longitudeDelta
    } = this.state.region;

    this.props.addBookmark(
      {
        address,
        postal,
        city,
        state,
        longitude,
        latitude,
        latitudeDelta,
        longitudeDelta,
        key: v4()
      },
      () => this.props.navigation.navigate("bookmarks")
    );
  };

  onRegionChange = region => {
    this.setState({ region });
  };

  render() {
    if (this.props.location) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
          />
          <View style={styles.buttonContainer}>
            <Icon
              underlayColor={"rgba(0,0,0,0)"}
              name={
                this.state.buttonPressed ? "add-circle-outline" : "add-circle"
              }
              color={THEME}
              size={60}
              onPress={() => this.handlePress()}
              onPressIn={() => this.setState({ buttonPressed: true })}
              onPressOut={() => this.setState({ buttonPressed: false })}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFound}>Desired location not found</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  if (_.isNull(state.location)) {
    return { location: false };
  }
  return { location: state.location };
};

export default connect(mapStateToProps, actions)(ViewAddressScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  notFound: {
    fontFamily: OSWALD_REGULAR,
    color: ERROR,
    fontSize: 32
  }
});
