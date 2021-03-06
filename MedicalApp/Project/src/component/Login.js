import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux';

/*export const IMAGENAME = require('./health.png');
import { IMAGENAME } from '../images';*/
export default class Login extends Component{
    render() {

        return (
                <View style = {styles.container}>
                    <View style = {styles.logoContainer}>
                        <Image style = {styles.logo} 
                        source = { require('../images/health.png')} 
                    />
                        <Text style = {styles.title}>Medical-Link Application</Text>
                
                    </View>

                    <View style = {styles.formContainer}>
                        <LoginForm/>
                    </View>
                    <View style = {styles.signupTextCont}>
                            <Text style = {styles.signupText}>Don't have an account yet ? </Text>
                            <TouchableOpacity onPress = {() => Actions.Register()}>
                            <Text style = {styles.signupButton}> Signup </Text>
                            </TouchableOpacity>
                    </View>

                   
                </View>


        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#FDA7DF'
    },
    logo:{
        width :150,
        height : 150,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: 20
    },
    logoContainer :{
        alignItems : 'center',
        flexGrow : 1,
        justifyContent:'center'
    },
    title :{
        color : '#FFF',
        marginTop : 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize : 20,
    },
    signupTextCont:{
        alignItems : 'center',
        justifyContent :'center',
        marginBottom : 20,
        flexDirection : 'row'
        
       
    },
    signupText :{
        color : '#B40431'

    },
    signupButton :{
        color : 'white',
        fontSize : 16,
        fontWeight : '900'
    }



});