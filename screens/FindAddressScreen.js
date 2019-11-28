import _ from "lodash";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";

class FindAddressScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      invalidAddress: false,
      city: "",
      invalidCity: false,
      state: "",
      invalidState: false,
      postal: "",
      invalidPostal: false
    };
  }

  handleChange = (name, text) => {
    const invalid = "invalid" + name[0].toUpperCase() + name.slice(1);

    this.setState(() => ({
      [name]: text,
      [invalid]: false
    }));
  };

  handleSearch = () => {
    if (this.checkIfEmpty()) {
    }
  };

  checkIfEmpty = () => {
    let proceed = true;

    if (_.isEmpty(this.state.address)) {
      this.setState({ invalidAddress: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.city)) {
      this.setState({ invalidCity: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.postal)) {
      this.setState({ invalidPostal: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.state)) {
      this.setState({ invalidState: true });
      proceed = false;
    }
    return proceed;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Find address</Text>
        </View>
        <KeyboardAvoidingView style={{ flex: 2 }} behavior="padding" enabled>
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={text => this.handleChange("address", text)}
          />
          {this.state.invalidAddress && (
            <Text style={styles.error}>Address is required</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={text => this.handleChange("city", text)}
          />
          {this.state.invalidCity && (
            <Text style={styles.error}>City is required</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="State"
            onChangeText={text => this.handleChange("state", text)}
          />
          {this.state.invalidState && (
            <Text style={styles.error}>State is required</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Postal"
            onChangeText={text => this.handleChange("postal", text)}
          />
          {this.state.invalidPostal && (
            <Text style={styles.error}>Postal is required</Text>
          )}
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            raised
            title="Search"
            onPress={() => this.handleSearch()}
          />
        </View>
      </View>
    );
  }
}

export default FindAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20
  },
  input: {
    padding: 5,
    paddingHorizontal: 20,
    borderColor: "#414141",
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 3
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 32,
    fontWeight: "500"
  },
  buttonStyle: {
    backgroundColor: "#a3a3a3",
    borderRadius: 3
  },
  titleStyle: {
    color: "#4e4e4e"
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: "flex-end",
    bottom: 50
  },
  error: {
    color: "red",
    fontSize: 12
  }
});
