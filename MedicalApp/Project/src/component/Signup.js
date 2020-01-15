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
                    <View style = {styles.logoContainer}>
                        <Image style = {styles.logo} 
                        source = { require('../images/user1.png')} 
                    />
                        <Text style = {styles.title}>NDID Medical Application</Text>
                
                    </View>
                        
                    <View style = {{   borderRadius : 25,margin :50, marginBottom : 1}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toekyc}><Text style={styles.buttonText} >ส่งข้อมูลยืนยันตัวตน</Text></TouchableOpacity>
                    </View>    
                    <View style = {{   borderRadius : 25,margin :50 ,marginBottom : 20}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.tomenu}><Text style={styles.buttonText} >ภายหลัง</Text></TouchableOpacity>
                    </View>
                    {/*<TouchableOpacity style = {{borderWidth : 1, height : 42 , width : "80%"
                        ,justifyContent : "center" , alignItems :"center ", borderRadius : 40,
                        backgroundColor : "black",  alignSelf : "center", textAlign :"center"}}>
                            <Text style = {{color = "white"}}>bb</Text>
                            
                </TouchableOpacity>*/}
                    

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