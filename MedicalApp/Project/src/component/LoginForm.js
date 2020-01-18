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
                    placeholder = "Username"
                    placeholderTextColor = '#B40431'
                    
                        style = {styles.input} />

                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    
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
      
      justifyContent:'space-between',
      alignItems :'center'
      
    },
   input : {
       height : 40,
       backgroundColor :'rgba(255, 255,255,0.3)',
       marginBottom : 20,
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