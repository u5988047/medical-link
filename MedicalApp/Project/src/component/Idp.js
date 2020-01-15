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
    towaitidp = () => {
        Actions.WaitIDP()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Select IdP</Text>

                        <Text>โรงพยาบาลที่เคยรักษาก่อนหน้า</Text>

                        <View style = {styles.check} >
                        <CheckBox key = 'Hospital1'title ='Hospital1' value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style = {{marginTop : 5}}>Hospital1</Text>
                        </View>

                        <View style = {styles.check} >
                        <CheckBox key = 'Hospital1'title ='Hospital1' value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style = {{marginTop : 5}}>Hospital2</Text>
                        </View>

                        <View style = {styles.check} >
                        <CheckBox key = 'Hospital1'title ='Hospital1' value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style = {{marginTop : 5}}>Hospital3</Text>
                        </View>

                        <Text>ไม่เคยรักษาเลือกที่นี่</Text>
                        <View style = {styles.check} >
                        <CheckBox key = 'Hospital1'title ='Hospital1' value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style = {{marginTop : 5}}>This Hospital</Text>
                        </View>

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