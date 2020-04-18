import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity, Button,Picker,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
import { Card } from 'react-native-shadow-cards';

export default class Deletedata extends Component{
    toLoading = () => {
        Actions.LoadingScreen()
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            citizen_id: '',
            idp :'',
            placeholderPicker :'Please choose IdP',
            res_initial_salt: '',
            res_ref_id: '',
            res_req_id: '',
            isRequest: false,
            isSuccess: Boolean
        };
        
    }

    //Function call API route to sendform
    sendrequest() {
        var validateurl = 'http://192.168.0.109:3000/validatecid';
        var requrl = 'http://192.168.0.109:3000/api/request';
        var self = this;
        console.log(new Date().getSeconds)
        axios.post(validateurl, {
            email: this.state.email,
            cid: this.state.citizen_id
        }).then(res => {
            console.log(Math.floor(Date.now()/1000))
            if(res.data.success == true) {
                axios.post(requrl, {
                    id: this.state.citizen_id,
                    idp : this.state.idp
                })
                .then(res => {
                    console.log(res);
                    if(!res){
                        return (ToastAndroid.show('No IdP found',ToastAndroid.SHORT))
                    }
                    else{
                          self.setState({res_initial_salt: res.data.initial_salt})
                          self.setState({res_ref_id: res.data.reference_id})
                          self.setState({res_req_id: res.data.request_id})
                                self.setState({isRequest: true})
                                self.setState({isSuccess: true})
                              return (ToastAndroid.show('Your sharing medical information contract request has been sent.',ToastAndroid.SHORT))
                    }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            else {
                console.log(res.data.message)
                return (ToastAndroid.show('Incorrect Information',ToastAndroid.SHORT))
            }
        })

    }


    render() {
        const isRequest = this.state.isRequest;
        let responsecard;

        if (isRequest && this.state.res_req_id != '') {
            responsecard = <View style = {styles.container}>
                        <Card style={{padding: 10, margin: 10, marginBottom: 30}}>
                          <Text style = {styles.Textshow, {textAlign: "center"}}>Request details</Text>
                          <Text style = {styles.Textshow}>Request_id: {this.state.res_req_id}</Text>
                          <Text style = {styles.Textshow}>Initial_salt: {this.state.res_initial_salt}</Text>
                          <Text style = {styles.Textshow}>Reference_id: {this.state.res_ref_id}</Text>
                        </Card>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toLoading}><Text style = {{color: "white"}}>IdP Result</Text></TouchableOpacity>
                    </View>;
        }

        if (!this.state.isSuccess) {
            responsecard = (ToastAndroid.show('No IdP found',ToastAndroid.SHORT))
        }

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Please enter your information</Text>
                     <View style = {{padding: 8, borderWidth: 2, borderRadius: 8, borderColor: "gray", margin: 10}}>
                     <View style = {styles.inputcontainer}>
                                <Text style ={{marginTop:10, marginLeft: 10}}>Email</Text>   
                                         <TextInput 
                                             placeholder = "test@example.com"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input}
                                             onChangeText={(value) => this.setState({email: value})}
                                             value={this.state.email}
                                        />
                       
                       </View>
                     <View style = {styles.inputcontainer}>
                                <Text style ={{marginTop:15, marginLeft: 10}}>Citizen ID</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             keyboardType ='number-pad'
                                             style = {styles.input}
                                             onChangeText={(value) => this.setState({citizen_id: value})}
                                             value={this.state.citizen_id}
                                        />
                       
                       </View>
                       
                       <View style = {styles.inputcontainer}> 
                     <Picker
                     style = {{width:'100%'}}
                     selectedValue = {this.state.idp}
                     onValueChange ={(value) => this.setState({idp:value, placeholderPicker:value})}
                     >
                        <Picker.Item label ={this.state.placeholderPicker} value="" />
                        <Picker.Item label ="Hospital1" value="idp1"/>
                        <Picker.Item label ="Hospital2" value="idp2" />

                     </Picker>
                     
                     </View>
                     </View> 
                    
                    <View style = {{paddingVertical:20}}>
                    
                    </View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.sendrequest.bind(this)}><Text style = {{color: "white"}}>Send Request</Text></TouchableOpacity>
                        {responsecard}
                </View>

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
        alignItems: 'center',
              },
        option :{
            flexDirection :'row',
            height : 40,
            width : '100%',
            fontSize:30,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            backgroundColor :'white'
        },
        head : {
            height : 40,
            backgroundColor :'#B40431',
            marginBottom : 10,
            width : '100%',
            alignItems :'center',
            textAlign:'center',
            color: '#FFFF',
            fontSize: 18,
            paddingTop: 5
        },
        
        inputcontainer :{
        
            flexDirection : 'row',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            paddingBottom :10
            
        },
        input : {
            height : 40,
            textAlign: 'right',
            alignContent:'flex-end',
            justifyContent : 'flex-end',
            alignItems:'flex-end',
            alignSelf : 'flex-end',
            width : '80%',
            flex : 1,
            marginTop: 5
            
        },
        buttonContainer :{
            backgroundColor: '#B40431',
            paddingVertical:5,
            borderRadius : 25,
            width : 200,
            alignItems : 'center',
            justifyContent :'center',
            textAlign : 'center',
            alignItems: 'center'
        },
        Textshow :{
            fontSize : 14,
            marginVertical : 20,
            color : 'black'
        },

});