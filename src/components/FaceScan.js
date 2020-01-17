import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import {LocalAuthentication} from 'expo-local-authentication';

export default class FaceScan extends Component{
    constructor(props){
          super(props);
          this.state ={
          };
        }
        
        render(){
    function message(){
      alert('Fuck you');
    }
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:"bold", padding:10}}>Face Scan Window</Text>
            <Text style={styles.description}>On this screen you will use the phones integrated face scanning system when prompted so you can gain access to the next page</Text>
            <Image style={styles.images} source={require('C:\\Users\\Adrian\\Documents\\Face-Off\\Images\\facescan.png')}/>
            <View style={styles.buttons}>
              <Button title="Start Scan" onPress={() => message()}/>
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
      // justifyContent: 'center',
    },
    description:{
      flex:0.5,
      padding:10,
      fontSize:20,
    },
    buttons:{
      position:"absolute",
      height:40,
      width:130,
      margin:620,
      backgroundColor: '#f7f7f7',
      borderRadius:10
    },
    images:{
      position:"absolute",
      margin:220,
      height:300,
      width:300
    }
  });