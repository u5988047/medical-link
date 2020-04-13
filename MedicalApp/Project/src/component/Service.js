import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
export default class Service extends Component{

    toMenu = () => {
        Actions.Menu()
}
    toTerm =() =>{
    Actions.TermconDelete()
}
    render() {

        return (
                <View style = {styles.container}>
                       
                       <Text style = {styles.head}>Service request</Text>
                       <View style = {{   borderRadius : 10,margin :50}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toTerm}><Text style={styles.buttonText} >Delete Personal Information</Text></TouchableOpacity>
                        </View>

                </View>

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : '#1289A7',
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
        buttonContainer :{
                backgroundColor: '#B40431',
                paddingVertical:10
            },
        buttonText: {
               textAlign: 'center',
               color: '#FFFF',
               fontWeight:'700',
                height: 30,
                fontSize:25
           }
       

});