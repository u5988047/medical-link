import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class OTP extends Component{
    render() {

        return (
                <View style = {styles.container}>
                    <TextInput 
                    placeholder = "OTP"
                    placeholderTextColor = 'white'
                    
                        style = {styles.input} />


                    <TouchableOpacity onPress = {() => Actions.Menu()} style = {styles.buttonContainer}>
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
       width : '80%'
       
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
      
   }

});