import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Tranferdata extends Component{
    toIdp = () => {
        Actions.Idp()
    }

    constructor(props) {
        super(props);
        this.state = {
            citizen_id: '',
        };
        
    }


    //Function call API route to sendform
    sendrequest() {
        var url = 'http://192.168.1.10:3000/api/request';
        var id;
        axios.post(url, {
                id: this.state.citizen_id,
                idp: "idp1"
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
        //   console.log(error);
        });
    }


    render() {
        const data = {
            citizen_id: this.state.citizen_id,
            idp: "idp1"
        }

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Please enter your information</Text>  

                     <View style = {styles.inputcontainer}>
                                <Text style ={{marginTop:10}}>หมายเลขบัตรประชาชน</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             keyboardType ='number-pad'
                                             style = {styles.input}
                                             onChangeText={(value) => this.setState({citizen_id: value})}
                                             value={this.state.citizen_id}
                                        />
                       
                       </View>
                       {/* <View style = {styles.inputcontainer}>
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
                       
                       </View> */}

                    {/*<View style = {styles.option}>
                        <Text style = {styles.choose}>โรงพยาบาลที่จะเข้ารับการรักษา</Text>
                       <ModalDropdown options={['โรงพยาบาลศิริราช', 'โรงพยาบาลพญาไท3']}/>
                    </View>
                    <View style = {styles.option}>
                        <Text style = {styles.choose}>โรงพยาบาลที่เข้ารักษาก่อนหน้า</Text>
                       <ModalDropdown options={['โรงพยาบาลศิริราช', 'โรงพยาบาลพญาไท3']}/>
        </View>*/}
                    
                    
                    <Button
                            title="ส่งข้อมูลยืนยัน"
                            onPress={this.sendrequest.bind(this)}
                            style = {{paddingVertical: 20}}
                        />
                       <TouchableOpacity onPress={this.toIdp}><Text >ถัดไป</Text></TouchableOpacity>


                </View>

               

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
        alignItems: 'center',
        paddingVertical: 20
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