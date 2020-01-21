import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType} from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor() {
        super();
        this.state = {
            datamong: [],
        };
    }

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
            url: 'http://10.0.75.1:3000/users/checkuser',
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
                    onChangeText={(input1) => this.setState({input1})}
                    value = {this.state.input1}    
                    />
                    

                    <TextInput 
                    placeholder = "Password"
                    placeholderTextColor = '#B40431'
                    secureTextEntry = {true}
                    
                        style = {styles.input} 
                        onChangeText={(input2) => this.setState({input2})}
                        value = {this.state.input2} 
                    />

                    <TouchableOpacity onPress = {this.userInform.bind(this)} style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>ล็อคอิน</Text>
                    </TouchableOpacity>
                   

                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        {dataMongo}
                    </View>

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