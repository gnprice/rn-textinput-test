/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

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
      <View style={styles.container}>
        <TextInput
           value={this.state.value}
           onChangeText={this.handleTextChange}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
