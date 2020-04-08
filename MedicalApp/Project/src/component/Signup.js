import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,borderRadius,justifyContent} from 'react-native';
import {Actions } from 'react-native-router-flux';

export default class Signup extends Component{

    tomenu = () => {
        Actions.Menu()
    }

    toekyc = () => {
        Actions.Ekyc()
    }

    render() {
        return (
                <View style = {styles.container}>
                        <Text style = {styles.head}>Authentication </Text>
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
        marginBottom : 10,
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
    title :{
        color : '#B40431',
        marginTop : 10,
        width : 160
    },
    buttonContainer :{
        backgroundColor: '#B40431',
        paddingVertical:5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFF',
        fontWeight:'400',
         height: 30,
         fontSize:20
    },
  

});