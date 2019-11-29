import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Icon } from "react-native-elements";
import { THEME } from "../Constants";
import { connect } from "react-redux";

class ViewAddressScreen extends Component {
  static navigationOptions = {
    title: "View Address"
  };

  constructor(props) {
    super(props);

    this.state = {
      region: this.props.region,
      bookmarkIcon: false
    };
  }

  handlePress = () => {
    this.setState({ bookmarkIcon: !this.state.bookmarkIcon });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} />
        <View style={styles.buttonContainer}>
          <Icon
            underlayColor={"rgba(0,0,0,0)"}
            name={this.state.bookmarkIcon ? "add-circle-outline" : "add-circle"}
            color={THEME}
            size={60}
            onPress={() => this.handlePress()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { region: state.address };
};

export default connect(mapStateToProps)(ViewAddressScreen);

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
