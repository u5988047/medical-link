import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class OTPreg extends Component{

    constructor(props) {
        super(props)
        this.state = {
            otp: String,
        };
    }
    
    validating() {
        var url = 'http://192.168.0.109:3000/otp-validate'
        axios.post(url, {
            secret: this.props.secret,
            token: this.state.otp
        }).then(res => {
            if(res.data.valid == true) {
                return (Actions.Menu())
            } else {
                return (Actions.Login(),ToastAndroid.show('Wrong OTP please try again.',ToastAndroid.SHORT))
            }
        });
    }

    render() {

        return (
                <View style = {styles.container}>
                    <TextInput 
                        placeholder = "OTP"
                        placeholderTextColor = 'white'
                        keyboardType={"number-pad"}
                        style = {styles.input}
                        onChangeText={(value) => this.setState({otp: value})}
                        value={this.state.otp}
                    />

                    <TouchableOpacity onPress={this.validating.bind(this)} style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>

                </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
      padding : 20,
      flexDirection :'row',
      justifyContent:'space-between',
      alignItems :'center',
      backgroundColor : '#5758BB',
      flex : 1
      
    },
   input : {
       height : 40,
       backgroundColor :'rgba(255, 255,255,0.3)',
       marginBottom : 20,
       paddingHorizontal : 10,
       width : '80%',
       color: "white"
   },
   buttonContainer :{
        backgroundColor :'rgba(255, 255,255,0.3)',
        paddingVertical : 15,
        height :40,
        width : 60,
        marginBottom : 20,
        borderRadius : 25

   },
   buttonText :{
       textAlign:'center',
       color : 'white',
      
   },
   resendText: {
       paddingTop: 10
   }

});