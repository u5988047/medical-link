import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType} from 'react-native';

import {Actions } from 'react-native-router-flux';
export default class LoginForm extends Component{

   /* OTP(){
        
        Action.OTP(PARAMS);
    }*/
    render() {

        return (
                <View style = {styles.container}>
                    <TextInput 
                    placeholder = "Phone Number"
                    placeholderTextColor = 'white'
                    keyboardType = 'number-pad'
                        style = {styles.input} />


                    <TouchableOpacity onPress = {() => Actions.OTP()} style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>ล็อคอิน</Text>
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
      alignItems :'center'
      
    },
   input : {
       height : 40,
       backgroundColor :'rgba(255, 255,255,0.3)',
       marginBottom : 20,
       paddingHorizontal : 10,
       width : '80%'
       
   },
   buttonContainer :{
        backgroundColor :'rgba(255, 255,255,0.3)',
        paddingVertical : 15,
        height :40,
        marginBottom : 20,

   },
   buttonText :{
       textAlign:'center',
       color : 'white',
      
   }

});