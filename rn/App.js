import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo'
import { primaryGradientArray } from './app/utils/Colors'
import Main from './app/Main';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>what divs?</Text>
        <Main />
      </LinearGradient>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});