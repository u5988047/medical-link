import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import { CheckBox } from 'react-native';

export default class Tranferdata extends Component{

    constructor(){
        super();
        this.state = {
            check : false
        }
    }
    checkBoxTest(){
        this.setState({
            check:! this.state.check
        })
    }
    toTranferdata = () => {
        Actions.Tranferdata()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Terms and Conditions</Text>  
                        <View style = {styles.center}>
                            <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                            
                            
                        </View>


                     <View style = {styles.center}>
                       <TouchableOpacity style={styles.buttonContainer} onPress={this.toTranferdata}><Text style={{color :'white'}} >ถัดไป</Text></TouchableOpacity>
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
        center :{
        
            alignItems :'center',
            paddingBottom : 10
        },
        buttonContainer :{
            backgroundColor: '#B40431',
            paddingVertical:5,
            borderRadius : 25,
            width : 200,
            alignItems : 'center',
            justifyContent :'center',
            textAlign : 'center',
            alignItems: 'center'
        },

});