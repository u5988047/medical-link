import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,Button} from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class Authen extends Component{
    totranfer = () => {
            Actions.Tranferdata()
    }
    toservice = () => {
            Actions.Service()
    }
    tohistory = () => {
            Actions.History()
    }
    toPasscodeTranferdata = () => {
        Actions.PasscodeTranferdata()
}
    render() {

        return (
                <View style = {styles.container}>
                    <Text style = {styles.head}>Request </Text>
                    <View style = {{   borderRadius : 10,margin :50}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toPasscodeTranferdata}><Text style={styles.buttonText} >Tranfer sensitive data</Text></TouchableOpacity>
                    </View>
                    <View style = {{   borderRadius : 10,margin :50}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toservice}><Text style={styles.buttonText}>Service request</Text></TouchableOpacity> 
                    </View>
                    <View style = {{   borderRadius : 10,margin :50}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.tohistory}><Text style={styles.buttonText}>History</Text></TouchableOpacity> 
                    </View>             
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