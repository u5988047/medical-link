import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default class History extends Component{
    render() {

        return (
                <View style = {styles.container}>
                    <Text style = {styles.head}>History</Text>
                    <View>
                           <Text style = {styles.Textshow}>Request ID :</Text>
                    </View>
                    <View>
                            <Text style = {styles.Textshow}>วันที่ : </Text>
                    </View>
                    <View>
                            <Text style = {styles.Textshow}>เวลา : </Text>
                    </View>
                    <View>
                            <Text style = {styles.Textshow}>ไฟล์สัญญา : </Text> 
                            <TouchableOpacity style ={styles.buttonContainer}>
                                <Text style = {{color : 'white',fontSize : 20,
                                 marginBottom : 20}}>ดาวน์โหลด</Text>
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
    buttonContainer :{
        backgroundColor :'#B40431',
        paddingVertical : 15,
        height :50,
        width : 100,
        marginBottom : 20,
        borderRadius : 25,
        

   },
   Textshow :{
       fontSize : 20,
       marginBottom : 20

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