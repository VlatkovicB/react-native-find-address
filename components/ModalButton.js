import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default class ModalButton extends Component {
  render() {
    const { buttonStyle, handlePress, textStyle, title } = this.props;
    return (
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
