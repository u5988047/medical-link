import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';

export default class WaitIDPDelete extends Component{

    constructor() {
        super();
        this.state = {
      };
        
    }

    
    toresult = () => {
        Actions.Menu()
}
  
    render() {
        
        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Success</Text>  

                     <View style = {styles.logoContainer}>
                        <Image style = {styles.logo} 
                        source = { require('../images/success.png')} 
                    />

                    </View>
                     
                <View style = {{alignItems : 'flex-end'}}>
                    <TouchableOpacity style = {styles.buttonContainer}onPress={this.toresult}>
                        <Text style= {{color:'white'}}>Back to Menu</Text>
                    </TouchableOpacity>
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
            backgroundColor :'green',
            paddingVertical : 15,
            height :50,
            width : 100,
            marginBottom : 20,
            borderRadius : 25,
            alignItems :'center'
            
    
       },
       
});