import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';

import RegisterForm from './RegisterForm';
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
                        <Text style = {styles.title}>NDID Medical Application</Text>
                
                    </View>

                    <View style = {styles.formContainer}>
                        <RegisterForm />
                    </View>
                    <View style = {styles.signupTextCont}>
                            <Text style = {styles.signupText}>Already have an account ? </Text>
                            <TouchableOpacity onPress ={() => Actions.Login()}>
                                <Text style = {styles.signupButton}> Sign in </Text>
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
        height : 150
    },
    logoContainer :{
        alignItems : 'center',
        flexGrow : 1,
        justifyContent:'center'
    },
    title :{
        color : '#FFF',
        marginTop : 10,
        width : 160
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