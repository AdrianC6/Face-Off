import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as LocalAuthentication from 'expo-local-authentication';

export default class Code extends Component {
    constructor(props){
      super(props);
      this.state ={};
      
  }

  render(){
  
    return (
      <View style={styles.container}>
         <Text style={{fontSize:25,fontWeight:"bold"}}>Code to Authenticate</Text>
       </View>
    );
  }
  }