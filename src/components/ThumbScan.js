import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, ScrollView } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class ThumbScan extends Component{
  constructor(props){
    super(props);
    this.state ={
      authenticated:false,
      modalVisible:false,
      failedAttempt:0
    };
  }

  componentDidMount(){
    this._hasLocalAuth()
  }

  _hasLocalAuth=()=>{
    let localAuth = LocalAuthentication.isEnrolledAsync()
    console.log(localAuth)
  }

  _authenticate=async()=>{
    try{
      let auth = await LocalAuthentication.authenticateAsync()
      if (auth.success) {
        this.setState({modalVisible: false, authenticated: true, failedAttempt: 0,});
        //alert("you are authenticated");
        this.props.navigation.navigate('Auth Token')
      } else {
        this.setState({failedCount: this.state.failedCount + 1,});
        this._message();
      }
    } catch (e) {
      console.log(e);
    }
  }

  _message=()=>{
    alert('You are not authenticated‽');
  }

  render(){
    return(
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={{fontSize:25, fontWeight:"bold", padding: 10}}>Thumb Scan Window</Text>
          <Text style={styles.description}>In this screen you use your phones built in finger print scanner when prompted so that you are able to reach the next page</Text>
          <Image style={styles.images} source={require('C:\\Users\\Adrian\\Documents\\Face-Off\\Images\\fingerprintscan.png')}/>
          <View style={styles.buttons}>
            <Button title="Start Scan" onPress={() => this._authenticate()}/>
          </View>
        </View>
      </ScrollView>
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
      margin:620,
      position:"absolute",
      height:40,
      width:130,
      backgroundColor: '#f7f7f7',
      borderRadius:10
    },
    images:{
      position:"absolute",
      margin:220,
      height:300,
      width:300
    },
    scroll:{
      backgroundColor: '#259b9a',
    }
  });