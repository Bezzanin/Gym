import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from 'react-native-elements';

class CTACard extends Component {
  render() {
    return (
        <View style={styles.container}>
      <Image source={require('../assets/images/CTA.png')} 
        resizeMode={Image.resizeMode.fill} style={styles.header}>
       	 <View>
            <Text style={styles.title}>Why not start rightnow?</Text>
            <Text style={styles.paragraph}>We will select programs adjusted to your personal parameters, needs and timetable.
                All Programs made by professionals
            </Text>
            <Button
            buttonStyle={styles.ActionButton}
  title='Choose Program' />

  		</View>

        </Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
 },
  title: {
    marginVertical: 30,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
  },
  paragraph: {
    marginHorizontal: 50, 
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 18,
    opacity: 0.8,
    textAlign: 'center'
  },
  ActionButton: {
      width: 200,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      alignSelf: 'center',
      marginTop: 30,
      backgroundColor: 'transparent'
  }
  
});

export default CTACard;


