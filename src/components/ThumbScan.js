import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default class ThumbScan extends Component{
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
            <Text style={{fontSize:25, fontWeight:"bold", padding: 10}}>Thumb Scan Window</Text>
            <Text style={styles.description}>In this screen you use your phones built in finger print scanner when prompted so that you are able to reach the next page</Text>
            <Image style={styles.images} source={require('C:\\Users\\Adrian\\Documents\\Face-Off\\Images\\fingerprintscan.png')}/>
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
    }
  });