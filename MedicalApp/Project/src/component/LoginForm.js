import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType, Button,ToastAndroid} from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor() {
        super();
        this.state = {
            datamong: [],   
        };
        
    }
    state = {
        

        username: 'park',
        password: '1234'
    };
    
    // handleChange= (event = {}) => {
    //     const name = event.target && event.target.name;
    //     const value = event.target && event.target.value;
      
    //     this.setState([name], value);

    //     console.log(name)
    //   }
    userInform(){
        // var url = 'http://localhost:3000/users/checkuser';
        // axios.get(url)
        // .then((Data) => {
        //   console.log(Data.data);
        //   this.setState({
        //     datamong: Data.data,
        //   }) 
        // })
        axios({
            url: 'http://192.168.1.10:3000/users/checkuser',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((Data) => {
              console.log(Data.data);
              this.setState({
                datamong: Data.data,
              }) 
            }).catch(e => {
                console.log(e);
              });
              
        };

        

       
   /* OTP(){
        
        Action.OTP(PARAMS);
    }*/
    render() {

        const dataMongo = this.state.datamong.map((item, index) => {
            var arraymong = ['Username: ',item.username,', Password: ',item.password].join(' ');
            return <Text style={{fontSize:20,fontWeight:'bold'}} key={index}>{arraymong}</Text>;
        })
        
          
         
        return (
                <View style = {styles.container}>
                    
                    
                    <TextInput 
                    placeholder = "Username"
                    placeholderTextColor = '#B40431'
                    style = {styles.input}
                    onChangeText={(value) => this.setState({username: value})}
                    value={this.state.username}
                    // onChangeText={(input1) => this.setState({input1})}
                    // value = {this.state.input1}    
                    />
                    

                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    style = {styles.input}
                    onChangeText={(value) => this.setState({password: value})}
                    value={this.state.password} 
                    // onChangeText={(input2) => this.setState({input2})}
                    // value = {this.state.input2} 
                    />

                    <TouchableOpacity onPress = {this.userInform.bind(this)} style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>ล็อคอิน</Text>
                    </TouchableOpacity>

    <Button
        title="LOGIN"
        onPress={() => 
            {

                // for(var i=0;arraymong.)
                if(this.state.username.localeCompare('park')!=0){
                    ToastAndroid.show('Invalid UserName',ToastAndroid.SHORT);
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
                   

                    {/* <View style={{flexDirection:'column',alignItems:'center'}}>
                        {dataMongo}
                    </View> */}

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