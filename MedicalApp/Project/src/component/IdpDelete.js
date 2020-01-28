import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,Picker} from 'react-native';
import {Actions } from 'react-native-router-flux';
import { CheckBox } from 'react-native';


export default class IdpDelete extends Component{

    constructor(){
        super();
        this.state = {
            PickerValue:''
        }
    }
    
    towaitidp = () => {
        Actions.WaitIDPDelete()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Select IdP (Delete)</Text>

                     <Picker
                     style = {{width:'80%'}}
                     selectedValue = {this.state.PickerValue}
                     onValueChange ={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
                     >
                        <Picker.Item label ="กรุณาเลือกโรงพยาบาลที่มีข้อมูล" value="" />
                        <Picker.Item label ="Hospital1" value="Hospital1" />
                        <Picker.Item label ="Hospital2" value="Hospital2" />


                     </Picker>

                     <View style = {{alignItems : 'center'}}>
                       <TouchableOpacity onPress={this.towaitidp}><Text >ถัดไป</Text></TouchableOpacity>
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
    check :{
        flexDirection : "row"
    }

});