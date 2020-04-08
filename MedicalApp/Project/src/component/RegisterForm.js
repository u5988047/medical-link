import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType, Button,ToastAndroid} from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class LoginForm extends Component{
    
render() {

    return (
                <View style = {styles.container}>
                    
                    <TextInput 
                    placeholder = "Firstname"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                   />
                    <TextInput 
                    placeholder = "Lastname"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}

                   />
                   <TextInput 
                    placeholder = "Citizen ID"
                    placeholderTextColor = '#B40431'
                    keyboardType ='number-pad'
                   
                    style = {styles.input}
                   />
                   <TextInput 
                   placeholder = "Email"
                   placeholderTextColor = '#B40431'
                   style = {styles.input}
                  />

                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    style = {styles.input}
                  />

<TouchableOpacity style = {styles.buttonContainer}>
    <Text style={styles.buttonText}>Register</Text>
</TouchableOpacity>
                   
                   
                </View>

               

        );
    }

}

const styles = StyleSheet.create({
    container:{
      padding : 11,
      
      justifyContent:'space-between',
      alignItems :'center'
      
    },
   input : {
       height : 40,
       backgroundColor :'rgba(255, 255,255,0.3)',
       marginBottom : 10,
       paddingHorizontal : 10,
       width : '80%',
       borderRadius : 25
       
   },
   buttonContainer :{
        backgroundColor :'#B40431',
        paddingVertical : 15,
        height :40,
        marginBottom : 20,
        borderRadius : 25,
        width : 300

   },
   buttonText :{
       textAlign:'center',
       color : 'white',
       fontWeight : '500'
       

      
   },
   user :{
    padding : 20,
    flexDirection :'row',
    justifyContent:'space-between',
    alignItems :'center'
    
  },
   
   

});