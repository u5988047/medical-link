import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType, Button,ToastAndroid} from 'react-native';
import { API_IP } from 'react-native-dotenv';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            datamong: [],
            temparray: [],
            input1: String,
            input2: String,
            error: false,
            loginSucess: false,
            username: String,
            password: String
        };
    }

    render() {
        return (
                <View style = {styles.container}>                    
                    <TextInput 
                    placeholder = "Username"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({username: value})}
                    value={this.state.username}
                />                    
                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    style = {styles.input}
                    onChangeText={(value) => this.setState({password: value})}
                    value={this.state.password} 
                    />
    <View style={{ flexDirection: 'row', marginBottom:10, }}>
    <Button
        title="LOGIN"
        onPress={() => 
            {
                // for(var i=0;arraymong.)
                if(this.state.username.localeCompare('demo@mahidol.ac.th')!=0){
                    ToastAndroid.show('Invalid UserName',ToastAndroid.SHORT);
                    console.log(this.state.username)
                    return;
                }
                if(this.state.password.localeCompare('1234')!=0){
                    ToastAndroid.show('Invalid Password',ToastAndroid.SHORT);
                    return;
                }
                else{
                    Actions.OTP()
                }

                // if(this.state.password.localeCompare('demo')!=0){
                //     ToastAndroid.show('Invalid Password',ToastAndroid.SHORT);
                //     return;
                // }

                //Handle LOGIN
            }
        }
    />
    </View>
    <Button
        title="SIGNUP"
        onPress={() => 
            {
                Actions.Signup()
            }
        }
    />         
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