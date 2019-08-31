/* eslint-disable no-multi-spaces */
import React, { Component } from 'react';
import { StatusBar  } from 'react-native';
import AppNavigator from './components/Navigation/AppNavigator';

StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
