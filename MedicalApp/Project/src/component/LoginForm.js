import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,KeyboardType} from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            datamong: [],
            temparray: [],
            input1: String,
            input2: String,
            user_name: '',
            password: '',
            error: false,
            loginSucess: false
        };
    }

    handleOnChangeUserName = (e) => {
        this.setState({
          user_name: e.target.value,
        });
      };   

    handleOnChangePassword = (e) => {
      this.setState({
        password: e.target.value,
      });
    };

    onSubmit = async (e) => {
        const data = {
          user_name: this.state.user_name,
          password: this.state.password,
        };
        const loginResult = await LoginService(data);
        if (loginResult !== 200) {
          this.setState({
            error: true,
            loginSuccess: false,
          });
        } else
          this.setState({
            loginSuccess: true,
            error: false,
          });
      };

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

    // verifyUser() {
    //     var url = 'http://10.0.75.1:3000/users/verifyuser';
    //     axios.post(url, {
    //       name: this.state.input1,
    //       pass: this.state.input2
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //     this.state.input1 = '';
    //     this.state.input2 = '';
    //   };
    verifyUser() {
        axios({
            url: 'http://10.0.75.1:3000/users/verifyuser',
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            name: this.state.input1,
            pass: this.state.input2
            }).then((response) => {
              console.log(response);
            }).catch(e => {
                console.log(e);
            });
            this.state.input1 = '';
            this.state.input2 = '';
        };

    renderItems() {
        var temparray = this.state.datamong.map(item => (
        <View key={item._id}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{item.username}</Text>
        </View>
        ));
    return <Text>{item.username}</Text>;
    }
   /* OTP(){
        
        Action.OTP(PARAMS);
    }*/
    render() {

        // const dataMongo = this.state.datamong.find(item => {
        //     // var arraymong = ['Username: ',item.username,', Password: ',item.password].join(' ');
        //     // Object.entries(this.state.temparray) = item.map(([key, value]) => {
        //     //     item.username;
        //     // })
        //     // console.log(temparrays);
        //     // return <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.input1} {this.state.input2}</Text>;
        // })

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

                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        {/* {dataMongo} */}
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.input1} {this.state.input2}</Text>
                    </View>
                    <TouchableOpacity onPress = {this.verifyUser.bind(this)} style = {styles.buttonContainer}>
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