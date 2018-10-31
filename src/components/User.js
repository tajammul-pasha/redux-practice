import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Counter extends Component {
  state = {
    gender: ""
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.getRandomUser}>
        <Text>click here</Text>
        {this.props.user.map(user => {
          return <Text>{user.gender}</Text>;
        })}
      </TouchableOpacity>
    );
  }
}

export default Counter;
