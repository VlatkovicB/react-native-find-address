import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Bookmark from "../components/Bookmark";
import { BACKGROUND } from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";

class BookmarksScreen extends Component {
  static navigationOptions = {
    title: "Bookmarks"
  };
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      locations: this.props.locations.address
    };
  }

  handleView = id => {
    console.log("VIEW");
  };

  handleDelete = id => {
    this.props.removeBookmark(id);
  };

  render() {
    const bookmarks = this.state.locations.address.map((location, index) => (
      <Bookmark
        location={location}
        key={index}
        deleteAddress={this.handleDelete}
        viewAddress={this.handleView}
      />
    ));
    return <View style={styles.container}>{bookmarks}</View>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  console.log("mapstatete");
  return {
    locations: state.location
  };
};

export default connect(mapStateToProps, actions)(BookmarksScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    flex: 1
  }
});
