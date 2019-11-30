import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Modal,
  Text
} from "react-native";
import Bookmark from "../components/Bookmark";
import {
  BACKGROUND,
  FOREGROUND,
  MODAL_POPUP_BACKGROUND,
  MODAL_BACKGROUND,
  OSWALD_REGULAR,
  OSWALD_BOLD
} from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Button } from "react-native-elements";

class BookmarksScreen extends Component {
  static navigationOptions = {
    title: "Bookmarks"
  };
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.locations,
      modalVisible: false
    };
  }

  handleView = id => {
    console.log("VIEW");
  };

  handleDelete = id => {
    this.setState({ modalVisible: false });
    this.props.removeBookmark(id);
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>
                  Are you sure you want to delete bookmark?
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.modalButton}
                  title="NO"
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                />
                <Button
                  style={styles.modalButton}
                  title="YES"
                  onPress={this.handleDelete}
                />
              </View>
            </View>
          </View>
        </Modal>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.location}
            renderItem={({ item }) => (
              <Bookmark
                location={item}
                deleteAddress={() => {
                  this.setState({ modalVisible: true });
                }}
                viewAddress={this.handleView}
              />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.bookmarks
  };
};

export default connect(mapStateToProps, actions)(BookmarksScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    flex: 1
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MODAL_POPUP_BACKGROUND
  },
  modalContainer: {
    backgroundColor: FOREGROUND,
    width: "80%",
    height: 150,
    borderRadius: 3
  },
  modalTextContainer: { justifyContent: "center", flex: 1 },
  modalText: {
    fontFamily: OSWALD_REGULAR,
    textAlign: "center",
    fontSize: 18
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  modalButton: {
    flex: 1,
    fontFamily: OSWALD_BOLD,
    justifyContent: 'space-around',
    alignSelf: "stretch"
  }
});
