import OTP from 'otp-client'
import React, { Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default class CodeGenerator extends Component{
    constructor(props){
      super(props);
      this.state ={
            QRSecret:'',
            currentCode:'',
            previousCode:'',
            nextCode:'',
            timeLeft:'',
            otp:{},
            counter:0
      };
    }
  
    componentDidMount(){
        this.setSecret()
        // this.generateCode(`${this.state.QRsecret}`)
        
    }

    setSecret=()=>{
      var thing =this.props.navigation.getParam("secret")
      this.setState({QRSecret:thing}, this.generateCode('mwl2 dyhh xhhx ynpm'))
      this.setState({QRSecret:thing}, this.generateCode('mwl2dyhhxhhxynpm'))        
    }

    generateCode=(thing)=>{
        const secret = thing
        const otp = new OTP(secret)
        this.setState({otp:otp})
        console.log("before",otp.getToken(-1))
        var secUntilNextCode = otp.getTimeUntilNextTick()
        var currentCode = otp.getToken(0)
        console.log("After: ",otp.getToken(1))
        console.log(otp)
        
        if(this.state.counter==0){
            this.setState({currentCode:currentCode, timeLeft:secUntilNextCode, counter:1})
            // console.log("hi");
        }
        setInterval(() => {
            secUntilNextCode = otp.getTimeUntilNextTick()
            currentCode = otp.getToken()
            this.setState({currentCode:currentCode, timeLeft:secUntilNextCode})
            // console.log("ho:", this.state.timeLeft)
        }, 1000);
    }

    // updateFields=()=>{
    //     const otp = this.state.otp
    //     const secUntilNextCode=otp.getTimeUntilNextTick()
    //     const currentCode = otp.getToken()
    //     this.setState({currentCode:currentCode})
    //     if(secUntilNextCode%2 == 0){
    //     this.setState({timeLeft:secUntilNextCode})
    //     }
    // }

    render(){
        //const secret = `${this.state.QRSecret}`
        //const otp = new OTP(secret)
        //var secUntilNextCode = otp.getTimeUntilNextTick()
        //var currentCode = otp.getToken();
        return(
            <View style={styles.container}>
                <Text style={{fontSize:25, fontWeight:"bold", padding: 10}}>Code</Text>
                <Text style={{flexDirection:"column", flex:1, fontSize:20, padding: 10}}>{this.state.currentCode}</Text>
                <Text style={{flexDirection:"column", flex:1, fontSize:10, padding:10}}>{this.state.timeLeft}</Text>
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
      },
      scroll:{
        backgroundColor: '#259b9a',
      }
    });