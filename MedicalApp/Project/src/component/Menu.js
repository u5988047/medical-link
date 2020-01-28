import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class Menu extends Component{
    toAuthen = () => {
        
            Actions.Authen()
        }
    toReceipt = () => {
        
            Actions.drugReceipt()
        }
    render() {

        return (
                <View style = {styles.container}>
                    

                    
                    <TouchableOpacity 
                    style={styles.backgroundColor}
                    onPress={this.toAuthen}>
                        
                    <View  style = {{ 
                        backgroundColor : '#FFFF' , 
                        width : 180, 
                        height : 200,
                        borderRadius : 10,
                        margin :10,
                        alignItems : "center"
                        
                        }}>
                            <Image style = {{ width : 90 , height : 100}} 
                        source = { require('../images/Card.png')} />
                        <Text style = {{
                            textAlign :'center',
                            
                    
                           
                        }}>Medical Data(ข้อมูลการแพทย์)</Text>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.backgroundColor}
                    onPress={this.toReceipt}>
                    <View style = {{ 
                        backgroundColor : '#FFFF' , 
                        width : 180, 
                        height : 200,
                        borderRadius : 10,
                        margin :10,
                        alignItems : "center"
                        
                        
                        }}>
                            <Image style = {{ width : 90 , height : 100, }} 
                        source = { require('../images/Receipt.png')} />
                        <Text style = {{
                            textAlign :'center',
                            
                            
                        }}> Drug receipt (ใบรับยา)</Text>

                    </View>
                    </TouchableOpacity>
                    
                </View>

              );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : '#B40431',
        flex : 1,
        flexDirection :'row',
        
        
      
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

});