/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



//import React, { Component } from 'react';
//import {
//  Platform,
//  StyleSheet,
//  Text,
//  View,
//  StatusBar,
//  Button,
//    TabNavigator, 
//    StackNavigator
//} from 'react-native';
//
//
//import Loading from './components/Loading';
//import ProfileScreen from './components/ProfileScreen';
//import HomeScreen from './components/HomeScreen';
//import Dashboard from './components/Dashboard';
//import Dashboard from './components/QuizAsk';
//
//export default class App extends React.Component {
// 
//  render() {
//    const MainNavigator = TabNavigator({
//      welcome: { screen: Dashboard },
//      main: { screen: TabNavigator({
//        Home: { screen: StackNavigator({
//          home: { screen: HomeScreen }
//        }) },
//        ProfileScreen: { screen: StackNavigator({
//          charts: { screen: ProfileScreen }
//        }) },
//        QuizAsk: { screen: StackNavigator({
//            more: { screen: QuizAsk }
//        }) },
//        })
//      },
//      });
// 
//    return (
//      <View style={styles.container}>
//        <MainNavigator />
//      </View>
//    );
//  }
//}
// 
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//  },
//});


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Loading from './components/Loading';
import ProfileScreen from './components/ProfileScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = StackNavigator({
  Dashboard: { screen: Dashboard },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
