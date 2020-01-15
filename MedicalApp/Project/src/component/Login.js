import React, {Component} from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
import LoginForm from './LoginForm';
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
                        <LoginForm />
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



});