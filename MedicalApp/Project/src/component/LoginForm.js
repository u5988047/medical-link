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
    // state = {
        

    //     username: 'park',
    //     password: '1234'
    // };
    
    // handleChange= (event = {}) => {
    //     const name = event.target && event.target.name;
    //     const value = event.target && event.target.value;
      
    //     this.setState([name], value);

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
          user_name: this.state.username,
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
            url: 'http://'+API_IP+':3000/users/checkuser',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((Data) => {
              console.log(JSON.stringify(Data.data));
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
            var url = 'http://'+API_IP+':3000/users/verifyuser';
            axios.post(url, {
                name: this.state.username,
                pass: this.state.password
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
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

                    {/* <View style={{flexDirection:'column',alignItems:'center'}}> */}
                        {/* {dataMongo} */}
                        {/* <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.input1} {this.state.input2}</Text> */}
                    {/* </View> */}
                    
                    {/* <TouchableOpacity onPress = {() => 
                      {
                        var url = 'http://192.168.43.168:3000/users/verifyuser';
                        var status;
                          axios.post(url, {
                              name: this.state.username,
                              pass: this.state.password
                          })
                          .then(function (response) {
                            console.log(response);
                            status = response.status;
                            console.log(status);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });

                        if(this.status == "200") {
                            Actions.OTP()
                          }
                          else{
                            ToastAndroid.show('Invalid UserName or Password',ToastAndroid.SHORT);
                          }
                      } 
                    }
                    style = {styles.buttonContainer}                  
                    >
                    <Text style={styles.buttonText}>ล็อคอิน</Text>
                    </TouchableOpacity> */}
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