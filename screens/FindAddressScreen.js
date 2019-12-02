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
import {
  BACKGROUND,
  OSWALD_REGULAR,
  PLACEHOLDER,
  THEME,
  ERROR
} from "../Constants";
import { connect } from "react-redux";
import * as actions from "../actions";

class FindAddressScreen extends Component {
  static navigationOptions = {
    title: "Find Address"
  };

  constructor(props) {
    super(props);

    this.state = {
      address: {
        // address: "",
        // city: "",
        // state: "",
        // postal: ""
        address: "21 Coral ST",
        city: "Beach Haven",
        state: "NJ",
        postal: "08008"
      },
      invalidAddress: false,
      invalidCity: false,
      invalidState: false,
      invalidPostal: false
    };
  }

  handleChange = (name, text) => {
    const invalid = "invalid" + name[0].toUpperCase() + name.slice(1);

    this.setState(() => ({
      address: {
        ...this.state.address,
        [name]: text
      },
      [invalid]: false
    }));
  };

  handleSearch = () => {
    if (this.checkIfEmpty()) {
      this.props.findAddress(this.state.address, () => {
        this.props.navigation.navigate("view");
      });
    }
  };

  checkIfEmpty = () => {
    let proceed = true;

    if (_.isEmpty(this.state.address.address)) {
      this.setState({ invalidAddress: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.address.city)) {
      this.setState({ invalidCity: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.address.postal)) {
      this.setState({ invalidPostal: true });
      proceed = false;
    }
    if (_.isEmpty(this.state.address.state)) {
      this.setState({ invalidState: true });
      proceed = false;
    }
    return proceed;
  };

  mandatory = required => {
    if (required) {
      return <Text style={styles.error}>This field is mandatory</Text>;
    }
    return <Text style={[styles.error, { color: BACKGROUND }]}>no error</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.inputContainer}
          behavior="padding"
          enabled
        >
          <View style={styles.individualInputContainer}>
            <TextInput
              style={[
                styles.input,
                { borderColor: this.state.invalidAddress ? ERROR : THEME }
              ]}
              placeholder="Address"
              placeholderTextColor={PLACEHOLDER}
              onChangeText={text => this.handleChange("address", text)}
            />
            {this.mandatory(this.state.invalidAddress)}
          </View>
          <View style={styles.individualInputContainer}>
            <TextInput
              style={[
                styles.input,
                { borderColor: this.state.invalidCity ? ERROR : THEME }
              ]}
              placeholder="City"
              placeholderTextColor={PLACEHOLDER}
              onChangeText={text => this.handleChange("city", text)}
            />
            {this.mandatory(this.state.invalidCity)}
          </View>
          <View style={styles.individualInputContainer}>
            <TextInput
              style={[
                styles.input,
                { borderColor: this.state.invalidState ? ERROR : THEME }
              ]}
              placeholder="State"
              placeholderTextColor={PLACEHOLDER}
              onChangeText={text => this.handleChange("state", text)}
            />
            {this.mandatory(this.state.invalidState)}
          </View>
          <View style={styles.individualInputContainer}>
            <TextInput
              style={[
                styles.input,
                { borderColor: this.state.invalidPostal ? ERROR : THEME }
              ]}
              placeholder="Postal"
              placeholderTextColor={PLACEHOLDER}
              onChangeText={text => this.handleChange("postal", text)}
            />
            {this.mandatory(this.state.invalidPostal)}
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            title="Search"
            onPress={() => this.handleSearch()}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(FindAddressScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    color: THEME,
    fontFamily: OSWALD_REGULAR,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    fontSize: 16
  },
  buttonStyle: {
    backgroundColor: THEME,
    borderRadius: 4
  },
  buttonTitleStyle: {
    fontFamily: OSWALD_REGULAR,
    fontSize: 18,
    color: BACKGROUND
  },
  buttonContainer: {
    marginHorizontal: 25,
    justifyContent: "flex-end",
    bottom: 50
  },
  error: {
    color: ERROR,
    fontSize: 11,
    fontFamily: OSWALD_REGULAR,
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    marginHorizontal: 20
  },
  individualInputContainer: {
    marginVertical: "2%"
  }
});
