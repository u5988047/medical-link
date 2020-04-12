import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import { CheckBox } from 'react-native';

export default class TermconDelete extends Component{

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
    toDeleteData = () => {
        Actions.DeleteData()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Terms and Conditions(Delete Information)</Text>  
                     <Text style = {{paddingHorizontal:20, paddingVertical:20}}>
                        <Text>                  </Text>Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant 
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie 
                        at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam
                        Id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit
                         gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas 
                         tellus rutrum tellus pellentesque eu.
                         {'\n'}
                         <Text>                  </Text>In eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit 
                         libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum 
                         fusce ut placerat orci nulla pellentesq Sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl 
                        nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec.
                        </Text> 
                        

                        <View style={{ flexDirection: 'column'}}>
                      <View style={{ flexDirection: 'row' , paddingLeft: 12}}>
                        <CheckBox
                          style = {{paddingBottom: 10}}
                          value={this.state.checked}
                          onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{marginTop: 5}}>I accept the Terms and Conditions</Text>
                      </View>
                    </View>


                     <View style = {styles.center}>
                       <TouchableOpacity style={styles.buttonContainer} onPress={this.toDeleteData}><Text style={{color :'white'}} >ถัดไป</Text></TouchableOpacity>
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
            fontSize:18,
            justifyContent :'center'
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