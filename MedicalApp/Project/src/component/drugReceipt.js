import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class drugReceipt extends Component{

    
    todrugInfor = () => {
        
            Actions.drugInformation()
        }
        
    render() {

        return (
                <View style = {styles.container}>
                    
                    <Text style = {styles.head}>Drug Receipt</Text>

                    
                    <TouchableOpacity style = {{alignItems : 'center'}}
                    
                    onPress={this.todrugInfor}>
                        
                    <View  style = {{ 
                        backgroundColor : '#B40431' , 
                        width : 350, 
                        height : 200,
                        borderRadius : 10,
                        margin :10,
                        justifyContent :'center'
                        
                        
                        }}>
                            <View style = {{alignItems: 'center'}}>
                            <Text style = {styles.Textshow}>January</Text>
                            </View>
                    </View>
                    </TouchableOpacity>
                    
                    
                </View>

              );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
        // flexDirection :'row',
        
        
      
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
    Textshow :{
        fontSize : 25,
        marginBottom : 20,
        color : 'white',
        alignItems :'center',
        borderBottomWidth : 2,
        borderBottomColor : 'white'
        
 
    },

});