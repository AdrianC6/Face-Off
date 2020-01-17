import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import * as LocalAuthentication from 'expo-local-authentication';

export default class AuthWindow extends Component{
    constructor(props){
          super(props);
          this.state ={
            FingerPrintDisabled:false,
            FaceScanDisabled:false,
            AuthMethod:[]
          };
    }

    async componentDidMount(){
      LocalAuthentication.hasHardwareAsync();
      let AuthMethod = await LocalAuthentication.supportedAuthenticationTypesAsync();
      //await this.setState.AuthMethod(AuthMethod => ({AuthMethod: AuthMethods}))
      
      console.log(AuthMethod)
      
    }

    _CheckAuth=()=>{
      var Authmethod = this.state.AuthMethod
        if(this.state.AuthMethod.length > 0){
          if(this.state.AuthMethod.length ==2) {
           //enable both
           this.setState.FingerPrintDisabled(false);
           this.setState.FaceScanDisabled(false);
          }else if(this.state.AuthMethod[0] = 2){
           // enable face
           this.setState.FaceScanDisabled(false);
           this.setState.FingerPrintDisabled(true);
          }else if(this.state.AuthMethod[0] = 1){
           //enable fingers
           this.setState.FingerPrintDisabled(false);
           this.setState.FaceScanDisabled(true);
        }
      }
    }

render(){
  this._CheckAuth()
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Authorization Window</Text>
            <View style={styles.buttons}>
              <Button title="Face Scan" onPress={()=> this.props.navigation.navigate('Face Scan Window')} disabled={this.state.FaceScanDisabled}/>
            </View>
            <View style={styles.buttons}>
              <Button title="Thumb Scan" onPress={() => this.props.navigation.navigate('Thumb Scan Window') } disabled={this.state.FingerPrintDisabled}/>
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
      width:150,
      backgroundColor: '#f7f7f7',
      borderRadius:10
    },
    images:{
      height:300,
      width:300
    }
  });
  