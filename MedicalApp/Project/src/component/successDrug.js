import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView, ScrollView,Text,Image, TextInput, TouchableOpacity, Button,Picker,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
import { Card } from 'react-native-shadow-cards';
const { height } = Dimensions.get('window');

export default class successDrug extends Component{

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({screenHeight: contentHeight});
    }

    constructor() {
        super();
        this.state = {
        isDone: 1,
        drugcode: String,
        sec: String,
      };
        
    }

    toverify() {
        var validcode = 'http://192.168.0.109:3000/otp-validate';
        var update = 'http://192.168.0.109:3000/drugReceipt/updatestatus';
        axios.post(validcode, {
            secret: this.props.secrets,
            token: this.state.drugcode
        }).then(res => {
            console.log(this.props.secrets)
            console.log(this.state.drugcode)
            console.log(res.data)
            if(res.data.valid == true) {
                axios.post(update, {
                    drugId: this.props.drugId
                }).then(res => {
                    JSON.stringify(res)
                    if(res.data != null) {
                        this.setState({isDone: 2})
                        return (ToastAndroid.show('Success',ToastAndroid.SHORT))
                    } else {
                        return (ToastAndroid.show('Server fail please contact organizer',ToastAndroid.SHORT))
                    }
                })
            } else {
                this.setState({isDone: 3})
                return (ToastAndroid.show('Verify code is wrong',ToastAndroid.SHORT))
            }
        })
    }

    toresult = () => {
        Actions.Menu()
}
  
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        const isDone = this.state.isDone;
        let showresult;
        if(isDone === 1) {
            showresult = <View style = {{padding: 8, borderWidth: 2, borderRadius: 8, borderColor: "gray", margin: 10}}>
            <View style = {styles.inputcontainer}>
        <Text style ={{marginTop:10, marginLeft: 10}}>Receipt ID: {this.props.drugId}</Text>   
                  
                  </View>
                <View style = {styles.inputcontainer}>
                           <Text style ={{marginTop:15, marginLeft: 10}}>Input Drug Code</Text>   
                                    <TextInput 
                                        placeholder = "123456"
                                        placeholderTextColor = 'gray'
                                        keyboardType ='number-pad'
                                        style = {styles.input}
                                        onChangeText={(value) => this.setState({drugcode: value})}
                                        value={this.state.drugcode}
                                   />
                  
                  </View>
                  <TouchableOpacity style = {styles.buttonContainer}onPress={this.toverify.bind(this)}>
                        <Text style= {{color:'white'}}>Verify</Text>
                    </TouchableOpacity>
                </View> 
            }

            if(isDone === 2) {
                showresult = <View style = {styles.logoContainer}>
                <Image style = {styles.logo} 
                source = { require('../images/success.png')} 
            />
            <View style = {{alignItems : 'flex-end'}}>
                    <TouchableOpacity style = {styles.buttonContainer}onPress={this.toresult.bind(this)}>
                        <Text style= {{color:'white'}}>Next</Text>
                    </TouchableOpacity>
                </View>   

            </View>
            }

            if(isDone === 3) {
                showresult = <View style = {styles.logoContainer}>
                <Image style = {styles.logo} 
                source = { require('../images/fail.png')} 
            />

                <View style = {{alignItems : 'flex-end'}}>
                    <TouchableOpacity style = {styles.buttonContainer}onPress={this.toresult}>
                        <Text style= {{color:'white'}}>Next</Text>
                    </TouchableOpacity>
                </View>   
            </View>
            }

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Pharmarcy IDP Application</Text>  

                     {showresult}
                            
                       
                </View>

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1
         },
        head : {
            height : 40,
            backgroundColor :'#B40431',
            marginBottom : 20,
            paddingHorizontal : 30,
            width : '100%',
            alignItems :'center',
            textAlign:'center',
            color: '#FFFF',
            fontSize:20
        },
        logo:{
            width :150,
            height : 150
        },
        logoContainer :{
            alignItems : 'center',
            flexGrow : 1,
            justifyContent:'center'
        },
        buttonContainer :{
            backgroundColor :'green',
            paddingVertical : 15,
            height :50,
            width : 100,
            marginTop : 20,
            borderRadius : 25,
            alignItems :'center'
            
    
       },
       input : {
        height : 40,
        textAlign: 'right',
        alignContent:'flex-end',
        justifyContent : 'center',
        alignItems:'flex-end',
        alignSelf : 'flex-end',
        width : '80%',
        flex : 1,
        marginTop: 5
        
    },
       inputcontainer :{
        
        flexDirection : 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom :10
        
    },
       
});