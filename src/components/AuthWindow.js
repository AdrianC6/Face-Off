import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"

export default class AuthWindow extends Component{
    constructor(props){
          super(props);
          this.state ={
          };
    }
render(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Authorization Window</Text>
            <View style={styles.buttons}>
              <Button title="Face Scan" onPress={()=> this.props.navigation.navigate('Face Scan Window')}/>
            </View>
            <View style={styles.buttons}>
              <Button title="Thumb Scan" onPress={() => this.props.navigation.navigate('Thumb Scan Window')}/>
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
  