import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-shadow-cards';

export default class WaitIDP extends Component{
    toresult = () => {
        Actions.Menu()
}
  
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>IDP Result</Text>  
                        <View style = {styles.logoContainer}>
                        <Image style = {styles.logo} 
                        source = { require('../images/user1.png')} 
                    />
                        <Text style = {styles.title}>NDID Medical Application {"\n"}</Text>
                        <Card style={{padding: 10, margin: 10, marginBottom: 30}}>
                            <Text style = {styles.title}>Your request is successful and the convention message is on blockchain.</Text>
                        </Card>
                    </View>       
                    <View style = {{   borderRadius : 25,margin :50 ,marginBottom : 20}}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.toresult}><Text style={styles.buttonText} >Main Menu</Text></TouchableOpacity>
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
            marginBottom : 20,
            paddingHorizontal : 30,
            paddingTop: 5,
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