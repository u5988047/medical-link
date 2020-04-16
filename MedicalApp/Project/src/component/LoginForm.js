import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType, Button,ToastAndroid} from 'react-native';
import { API_IP } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loginSucess: false,
            email: String,
            password: String,
            secret: String,
            user: String
        };
    }

    sendLogin = async()=> {
      var url = 'http://192.168.0.109:3000/api/account/signin';
      var mailurl = 'http://192.168.0.109:3000/mailsender';
      var self = this;
        axios.post(url, {
          password: this.state.password,
          email: this.state.email
        }).then(async (res) => {
          console.log(JSON.stringify(res))
          console.log(res.data.success)
          if(res.data.success == true){
            try {
              await AsyncStorage.setItem('token', res.data.token)
            } catch(e) {
              console.log(e)
            }
            self.setState({user: res.data.firstName})
            axios.post(mailurl, {
              email: this.state.email
            }).then(res => {
              console.log(res)
              if(res.data.success == true){
                self.setState({secret: res.data.secret});
                return (Actions.OTP({secret: this.state.secret}),ToastAndroid.show('Hello '+ this.state.user +' please input OTP',ToastAndroid.SHORT))
              } else {
                return (ToastAndroid.show('Server error please contact application owner.',ToastAndroid.SHORT))
              }
            })
          }
          else{
            return (ToastAndroid.show('Invalid username or password',ToastAndroid.SHORT))
          }
        })
    }
   
    render() {
        return (
                <View style = {styles.container}>                    
                    <TextInput 
                    placeholder = "Email"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({email: value})}
                    value={this.state.email} 
                />                    
                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    style = {styles.input}
                    onChangeText={(value) => this.setState({password: value})}
                    value={this.state.password} 
                    />

                    
    <TouchableOpacity style = {styles.buttonContainer}
        onPress={this.sendLogin.bind(this)}
       
    ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>        
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