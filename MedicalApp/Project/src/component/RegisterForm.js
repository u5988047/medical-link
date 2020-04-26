import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType, Button,ToastAndroid} from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';

export default class RegisterForm extends Component{
   
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname :'',
        cid: '',
        Email :'',
        Password: '',
        isSuccess: false,
        secret: String,
        ischeck: false,
        otp: String,
        reqid: String
    };
    
}

verifyEmail() {
  var mailurl = 'http://192.168.0.109:3000/mailsender';
  var self = this;
  axios.post(mailurl, {
    email: this.state.Email
  }).then(res => {
    console.log(res)
    if(res.data.success == true) {
      self.setState({secret: res.data.secret});
      self.setState({ischeck: true});
      return (ToastAndroid.show('Please check OTP in mailbox',ToastAndroid.SHORT))
    } 
    if(res.data.success == false) {
      return (ToastAndroid.show('Your email is not correct.',ToastAndroid.SHORT))
    }
    else {
      return (ToastAndroid.show('Server error please contact application owner.',ToastAndroid.SHORT))
    }
  })
}

registsend() {
  var registurl = 'http://192.168.0.109:3000/api/registrequest';
  var signupurl = 'http://192.168.0.109:3000/api/account/signup';
  var validurl = 'http://192.168.0.109:3000/otp-validate';
  var asdata = 'http://192.168.0.109:3000/api/getdatafromAS';
  var self = this;
  axios.post(validurl, {
    secret: this.state.secret,
    token: this.state.otp
  }).then(res => {
    if(res.data.valid == true) {
      axios.post(registurl, {
        id: this.state.cid,
        idp: 'idp1'
      }).then(res => {
        self.setState({reqid: res.data.request_id})
        if(res.data.reference_id) {
          axios.post(asdata, {
            request_id: this.state.reqid
          }).then(res => {
            axios.post(signupurl, {
              lastName: this.state.lastname,
              password: this.state.Password,
              citizenID: this.state.cid,
              firstName: this.state.firstname,
              email: this.state.Email
            }).then(res=> {
              console.log(JSON.stringify(res))
              console.log(res.data.success)
              if(res.data.success == true){
                this.state.isSuccess = true;
                console.log(this.state.isSuccess)
                return (Actions.Login(),ToastAndroid.show('Your account is sign up',ToastAndroid.SHORT))
              }
              else{
                this.state.isSuccess = false;
                console.log(this.state.isSuccess)
                return ToastAndroid.show('Failed to sign up',ToastAndroid.SHORT);
              }
            })
          })
        } else {
          return (ToastAndroid.show('Cannot found your credential in IDP.',ToastAndroid.SHORT))
        }
      })
    } else {
      return (ToastAndroid.show('Wrong verification code please try again.',ToastAndroid.SHORT))
    }
  })
}

sendRegist(){
  var url = 'http://192.168.0.109:3000/api/account/signup';
  axios.post(url, {
    lastName: this.state.lastname,
    password: this.state.Password,
    citizenID: this.state.cid,
    firstName: this.state.firstname,
    email: this.state.Email
  }).then(res=> {
    console.log(JSON.stringify(res))
    console.log(res.data.success)
    if(res.data.success == true){
      this.state.isSuccess = true;
      console.log(this.state.isSuccess)
      return (Actions.Login(),ToastAndroid.show('Your account is sign up',ToastAndroid.SHORT))
    }
    else{
      this.state.isSuccess = false;
      console.log(this.state.isSuccess)
      return ToastAndroid.show('Failed to sign up',ToastAndroid.SHORT);
    }
  })
}

render() {
    const ischeck = this.state.ischeck;
    let otpinput;
    if (ischeck == true) {
      otpinput = <View style = {styles.container}>
        <TextInput 
        placeholder = "OTP"
        placeholderTextColor = '#B40431'
        style = {styles.input}
        onChangeText={(value) => this.setState({otp: value})}
        value={this.state.otp}
      />
      <TouchableOpacity
          style = {styles.buttonContainer}
          onPress={this.registsend.bind(this)}
         >
          <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>; 
    }

    return (
                <View style = {styles.container}>
                    
                    <TextInput 
                    placeholder = "Firstname"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({firstname: value})}
                    value={this.state.firstname}
                   />
                    <TextInput 
                    placeholder = "Lastname"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({lastname: value})}
                    value={this.state.lastname}
                   />
                   <TextInput 
                    placeholder = "Citizen ID"
                    placeholderTextColor = '#B40431'
                    keyboardType ='number-pad'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({cid: value})}
                    value={this.state.cid}
                   />
                   <TextInput 
                   placeholder = "Email"
                   placeholderTextColor = '#B40431'
                   style = {styles.input}
                   onChangeText={(value) => this.setState({Email: value})}
                   value={this.state.Email}
                  />

                  <TextInput 
                  placeholder = "Password"
                  placeholderTextColor = '#B40431'
                  secureTextEntry = {true}
                  style = {styles.input}
                  onChangeText={(value) => this.setState({Password: value})}
                  value={this.state.Password}
                  />

<TouchableOpacity
    style = {styles.buttonContainer}
    onPress={this.verifyEmail.bind(this)}
   >
    <Text style={styles.buttonText}>Verify Email</Text>
</TouchableOpacity>
    {otpinput}                                    
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