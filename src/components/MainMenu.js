import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
//import AuthWindow from "./src/components/AuthWindow"

export default class MainMenu extends Component {
    constructor(props){
      super(props);
      this.state ={};
  }
  render(){
  
    return (
      <View style={styles.container}>
         <Text style={{fontSize:25,fontWeight:"bold"}}>Capstone Project</Text>
         <Image style={styles.images} source={require('C:\\Users\\Adrian\\Documents\\Face-Off\\Images\\cybersecurity.png')} />
         <View style={styles.buttons}>
           <Button 
             title="Auth Page"
             onPress={() => this.props.navigation.navigate('Auth Window')}
         />
         </View>
       </View>
    );
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#259b9a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons:{
      margin: 20,
      height:40,
      width:100,
      backgroundColor: '#f7f7f7',
      borderRadius:10
    },
    images:{
      height:300,
      width:300
    }
  });
  