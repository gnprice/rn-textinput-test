import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: '',
  };

  handleTextChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <View>
        <TextInput
           value={this.state.value}
           onChangeText={this.handleTextChange}
         />
      </View>
    );
  }
}
