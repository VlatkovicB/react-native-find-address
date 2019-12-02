import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

export default class ModalButton extends Component {
  render() {
    const { buttonStyle, handlePress, textStyle, title } = this.props;
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={handlePress}
        activeOpacity={0.5}
      >
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
