import React, { Component } from 'react';
import { Text, Button, Image, View, StyleSheet, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

class Dashboard extends Component {
   state = {
      names: [
         {'name': 'Home', 'id': 1},
         {'name': 'Profile', 'id': 2},
         {'name': 'Settings', 'id': 3},
         {'name': 'QuizAsk', 'id': 4},
         {'name': 'QuizResult', 'id': 5},
         {'name': 'CandidateProfile', 'id': 6},
         {'name': 'CandidateList', 'id': 7}
      ]
   }

   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                   <View key = {item.id} style = {styles.item}>
                        <Button
                            style = {styles.button}
                            title= {item.name} 
                            onPress={() => {
                                console.debug("My Log");
                                console.debug(item.name);
                                this.props.navigation.navigate(item.name, { name: item.name })
                            }}/>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default Dashboard

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   },
    button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
   }
})
