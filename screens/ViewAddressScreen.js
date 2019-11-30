import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import { THEME } from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";

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
    this.props.addBookmark(
      {
        location: this.props.location
      },
      () => this.props.navigation.navigate("bookmarks")
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} />
        <View style={styles.buttonContainer}>
          <Icon
            underlayColor={"rgba(0,0,0,0)"}
            name={
              this.state.buttonPressed ? "add-circle-outline" : "add-circle"
            }
            color={THEME}
            size={60}
            onPress={() => this.handlePress(this.state.region.id)}
            onPressIn={() => this.setState({ buttonPressed: true })}
            onPressOut={() => this.setState({ buttonPressed: false })}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.bookmarks };
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
  }
});
