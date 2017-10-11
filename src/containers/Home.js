import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  toList = () => {
    Alert.alert(
      'FlexiApps',
      'this link will redirect to the list', [{
        text: 'ok',
        onPress: () => console.log('Ask me later pressed')
      }], {
        cancelable: false
      }
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to FlexiApps!</Text>
        <TouchableOpacity onPress={this.toList}>
          <Text style={styles.instructions}>Navigate to List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
