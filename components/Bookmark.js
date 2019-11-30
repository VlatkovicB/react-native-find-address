import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { OSWALD_REGULAR, THEME, OSWALD_BOLD } from "../Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

class Bookmark extends Component {
  constructor(props) {
    super(props);

    const {
      address,
      city,
      state,
      postal,
      key,
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    } = this.props.location;

    this.state = {
      address,
      city,
      state,
      postal,
      key,
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    };
  }

  handleView = () => {
    this.props.viewAddress();
  };
  handleDelete = () => {
    this.props.deleteAddress(this.state.key);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.rowHeader}>Address:</Text>
          <Text style={styles.rowHeader}>City:</Text>
          <Text style={styles.rowHeader}>State:</Text>
          <Text style={styles.rowHeader}>Postal:</Text>
        </View>
        <View style={(styles.column, { flex: 3 })}>
          <Text style={styles.rowData}>{this.state.address}</Text>
          <Text style={styles.rowData}>{this.state.city}</Text>
          <Text style={styles.rowData}>{this.state.state}</Text>
          <Text style={styles.rowData}>{this.state.postal}</Text>
        </View>
        <View style={styles.column}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.handleDelete()}
            >
              <Image
                source={require("../assets/garbage.png")}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.handleView()}
            >
              <Image
                source={require("../assets/eye.png")}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(Bookmark);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 8,
    borderBottomColor: THEME,
    borderBottomWidth: 1,
    padding: 3
  },
  column: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  rowHeader: {
    flex: 1,
    fontFamily: OSWALD_BOLD,
    color: THEME,
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  rowData: {
    flex: 1,
    fontFamily: OSWALD_REGULAR,
    color: THEME,
    fontSize: 16
  },
  button: {
    margin: 3,
    width: 40,
    height: 40
  }
});
