import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';

export default class Tranferdata extends Component{
    toIdp = () => {
        Actions.Idp()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Please enter your information</Text>  

                     <View style = {styles.inputcontainer}>
                                <Text>หมายเลขบัตรประชาชน</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text style = {styles.inputheader}>ชื่อ-นามสกุล</Text>   
                                         <TextInput 
                                             placeholder = "สมิธ ปาน"
                                             placeholderTextColor = 'gray'
                                             
                                             style = {styles.input}/>
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text style = {styles.inputheader}>เบอร์มือถือ</Text>   
                                         <TextInput 
                                             placeholder = "0812345678"
                                             placeholderTextColor = 'gray'
                                             
                                             style = {styles.input}/>
                       
                       </View>

                    {/*<View style = {styles.option}>
                        <Text style = {styles.choose}>โรงพยาบาลที่จะเข้ารับการรักษา</Text>
                       <ModalDropdown options={['โรงพยาบาลศิริราช', 'โรงพยาบาลพญาไท3']}/>
                    </View>
                    <View style = {styles.option}>
                        <Text style = {styles.choose}>โรงพยาบาลที่เข้ารักษาก่อนหน้า</Text>
                       <ModalDropdown options={['โรงพยาบาลศิริราช', 'โรงพยาบาลพญาไท3']}/>
        </View>*/}
                    
                    
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