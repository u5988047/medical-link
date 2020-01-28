import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';

export default class Delete extends Component{
    toIdp = () => {
        Actions.IdpDelete()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Please enter your information (Delete)</Text>  

                     <View style = {styles.inputcontainer}>
                                <Text style ={{marginTop:10}}>หมายเลขบัตรประชาชน</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             keyboardType ='number-pad'
                                             style = {styles.input} />
                       
                       </View>
                       
                    
                    
                    <View style = {{alignItems : 'center'}}>
                       <TouchableOpacity onPress={this.toIdp}><Text >ถัดไป</Text></TouchableOpacity>
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
        option :{
            flexDirection :'row',
            height : 40,
            width : '100%',
            fontSize:30,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            backgroundColor :'white'
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
        
        inputcontainer :{
        
            flexDirection : 'row',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            
           /* justifyContent : 'center',
            alignItems:'center',
            alignContent:'flex-start',
            alignSelf : 'flex-start'*/
        },
        input : {
            height : 40,
            textAlign: 'right',
            alignContent:'flex-end',
            justifyContent : 'flex-end',
            alignItems:'flex-end',
            alignSelf : 'flex-end',
            width : '80%',
            
            flex : 1
            
        },

});