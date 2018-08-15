import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="John Doe">
      
    <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={require('../images/woman.jpg')}/>  
      </View>

    <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
            
    </Card>
  </View>
);


var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },
  imageContainer: {
    width: 80,
          height: 80,
    borderRadius: 64,
      alignSelf: "center",
          marginBottom: 20,
      backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center"
  },
  profileImage: {
    width: 80,
          height: 80,
    borderRadius: 64
  },
  defaultImageContainer: {
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }
});