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
  OSWALD_REGULAR,
  OSWALD_BOLD,
  ERROR,
  THEME
} from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";
import ModalButton from "../components/ModalButton";

class BookmarksScreen extends Component {
  static navigationOptions = {
    title: "Bookmarks"
  };
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.locations,
      modalVisible: false,
      key: ""
    };
  }

  handleView = item => {
    this.props.viewBookmark(item, () => {
      this.props.navigation.navigate("view");
    });
  };

  handleDelete = () => {
    this.setState({ modalVisible: false });
    this.props.removeBookmark(this.state.key);
    this.setState({ key: "" });
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
                <ModalButton
                  buttonStyle={[styles.buttonStyle, { backgroundColor: ERROR }]}
                  title="NO"
                  textStyle={styles.textStyle}
                  handlePress={() => {
                    this.setState({ modalVisible: false });
                  }}
                />
                <ModalButton
                  buttonStyle={[styles.buttonStyle, { backgroundColor: THEME }]}
                  textStyle={styles.textStyle}
                  title="YES"
                  handlePress={this.handleDelete}
                />
              </View>
            </View>
          </View>
        </Modal>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.props.locations}
            renderItem={({ item }) => (
              <Bookmark
                location={item}
                deleteAddress={() =>
                  this.setState({ modalVisible: true, key: item.key })
                }
                viewAddress={() => this.handleView(item)}
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
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTextContainer: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  modalText: {
    fontFamily: OSWALD_REGULAR,
    textAlign: "center",
    fontSize: 18
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%"
  },
  buttonStyle: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "30%",
    borderRadius: 3,
    height: "46%",
    maxWidth: "30%"
  },
  textStyle: {
    flex: 1,
    fontFamily: OSWALD_BOLD,
    color: FOREGROUND,
    textAlignVertical: "center",
    textAlign: "center"
  }
});
