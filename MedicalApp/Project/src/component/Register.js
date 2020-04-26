import React, {Component} from 'react';
import {StyleSheet, Dimensions, SafeAreaView, ScrollView, View,Text,Image, TouchableOpacity} from 'react-native';

import RegisterForm from './RegisterForm';
import { Actions } from 'react-native-router-flux';
const { height } = Dimensions.get('window');

/*export const IMAGENAME = require('./health.png');
import { IMAGENAME } from '../images';*/
export default class Register extends Component{

    constructor() {
        super();
        this.state = {  
            screenHeight: 0,
        };
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({screenHeight: contentHeight});
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <SafeAreaView style = {{backgroundColor : '#FDA7DF'}}>
                <ScrollView 
                    style = {{flexDirection:'column', backgroundColor : '#FDA7DF', marginTop: 30}}
                    scrollEnable = {scrollEnabled}
                    onContentSizeChange = {this.onContentSizeChange}
                >
                    <View style = {styles.logoContainer}>
                        <Image style = {styles.logo} 
                        source = { require('../images/health.png')} 
                    />
                        <Text style = {styles.title}>Medical-Link Application</Text>
                
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

                   
                </ScrollView>
            </SafeAreaView>

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
        justifyContent:'center',
        marginBottom: 160
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