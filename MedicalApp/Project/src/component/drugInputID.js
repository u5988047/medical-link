import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class drugInputID extends Component{
    tocodeDrug = () => {
        
        Actions.codeDrugReceipt()
    }
    render() {

        return (
                <View style = {styles.container}>
                    
                    <Text style = {styles.head}>โปรดใส่ไอดีของใบรับยาที่ต้องการ</Text>
                    {/* <View style ={styles.container}>
                        <Text>โปรดใส่ไอดีของใบรับยาที่ต้องการ</Text>
                    </View> */}
                    <View style = {{flexDirection :'row',justifyContent:'space-around'}}>
                    <TextInput 
                        placeholder = "00001"
                        placeholderTextColor = 'white'                   
                        style = {styles.input} />
                    <TouchableOpacity onPress = {this.tocodeDrug} style = {styles.buttonContainer}>
                    <Text style={styles.buttonText}>ถัดไป</Text>
                    </TouchableOpacity>
                    </View>
                </View>

        );
    }

}

const styles = StyleSheet.create({
    container:{
    //   padding : 20,
    //   flexDirection :'row',
    //   justifyContent:'space-between',
    //   alignItems :'center',
    //   backgroundColor : 'white',
    //   flex :1
      
    },
   input : {
       height : 40,
       backgroundColor :'#B40431',
       marginBottom : 20,
       paddingHorizontal : 10,
       width : '60%'
       
   },
   buttonContainer :{
        backgroundColor :'#B40431',
        paddingVertical : 15,
        height :40,
        width : 60,
        marginBottom : 20,
        borderRadius : 25

   },
   buttonText :{
       textAlign:'center',
       color : 'white',
      
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