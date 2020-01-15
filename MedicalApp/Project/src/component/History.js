import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
export default class History extends Component{
    render() {

        return (
                <View style = {styles.container}>
                       
                       <ModalDropdown options={['option 1', 'option 2']}/>

                </View>

               

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : '#1289A7',
        flex : 1
        
        
      
    }

});