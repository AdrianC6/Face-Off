import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class FaceScan extends Component{
    constructor(props){
          super(props);
          this.state ={
          };
    }
render(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Face Scan Window</Text>
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