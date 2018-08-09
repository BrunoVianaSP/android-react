import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class QuizAsk extends React.Component {
  static navigationOptions = {
    title: 'QuizAsk Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="QuizAsk"
        onPress={() =>
          navigate('Dashboard', { name: 'Dashboard' })
        }
      />
    );
  }
}