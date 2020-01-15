import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,Picker} from 'react-native';
import {Actions } from 'react-native-router-flux';
import CodeInput from 'react-native-confirmation-code-input';


export default class Passcode extends Component{
  
 
  
    render(){
      
    return (
        
        <CodeInput
      ref="codeInputRef2"
      secureTextEntry
      compareWithCode='AsDW2'
      activeColor='#B40431'
      inactiveColor='#B40431'
      autoFocus={false}
      ignoreCase={true}
      inputPosition='center'
      size={50}
      onFulfill={() => Actions.TermconTranfer()}
      containerStyle={{ marginTop: 30 }}
      codeInputStyle={{ borderWidth: 1.5 }}
    />
        
        
    );
    }
  };
  
  const styles = StyleSheet.create({
  })
  