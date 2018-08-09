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



        
        
//const App = createStackNavigator({
//  Home: { screen: HomeScreen },
//  Profile: { screen: ProfileScreen },
//});
//
//export default App;
//type Props = {};
//
//export default class App extends Component<Props> {
//    
//  Home: { screen: HomeScreen },
//  Profile: { screen: ProfileScreen },
//    
//    
//    handleClick = () => {
//        if (this.state.color === 'green'){
//           this.setState({myColor: 'blue'});
//        } else {
//           this.setState({myColor: 'green'});
//        }
//    }
//    
//    
//  render() {
//    return (
//      <View style={styles.container}>
//        <StatusBar
//          barStyle="light-content"
//          backgroundColor="#4F6D7A"
//        />
////        <Loading/>
//        
//        <Button
//          onPress={() => handleClick(this)}
//          title="Learn More"
//          color="#841584"
//          accessibilityLabel="Learn more about this purple button"
//        />
//        
//      </View>
//    );
//  }
//}



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
