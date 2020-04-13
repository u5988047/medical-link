import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,Picker,Button} from 'react-native';
import {Actions } from 'react-native-router-flux';
import { API_IP } from 'react-native-dotenv';
export default class Delete extends Component{
    
    towaitidp = () => {
        Actions.WaitIDPDelete()
    }
    constructor(props) {
        super(props);
        this.state = {
            citizen_id: '',
            idp :'',
            placeholderPicker :'Please Select IDP'
            
        };
        
    }


    //Function call API route to sendform
    sendrequest() {
        var url = 'http://'+API_IP+':3000/api/request';
        var id;
        axios.post(url, {
                id: this.state.citizen_id,
                idp : this.state.idp
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Please enter your information (Delete)</Text>  

                     <View style = {styles.inputcontainer}>
                                <Text style ={{marginTop:10, marginLeft:10,fontSize:16}}>Citizen ID</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             keyboardType ='number-pad'
                                             style = {styles.input}
                                             onChangeText={(value) => this.setState({citizen_id: value})}
                                             value={this.state.citizen_id}
                                        />
                       
                       </View>

                       <View style = {styles.inputcontainer}> 
                     <Picker
                     style = {{width:'100%'}}
                     selectedValue = {this.state.idp}
                     onValueChange ={(value) => this.setState({idp:value, placeholderPicker:value})}
                     >
                        <Picker.Item label ={this.state.placeholderPicker} value="" />
                        <Picker.Item label ="Hospital1" value="idp1"/>
                        <Picker.Item label ="Hospital2" value="idp2" />


                     </Picker>
                     
                     </View>

                     <View style = {{paddingVertical:20}}>
                    <Button
                            title="Send confirmation"
                            onPress={this.sendrequest.bind(this)}
                            style = {{paddingBottom: 20}}
                        />
                    </View>
                       <TouchableOpacity style={styles.buttonContainer} onPress={this.towaitidp}><Text style = {{ color:"white"}}>Next</Text></TouchableOpacity>
                     
                       
                    
                    
                   
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
            fontSize:18
        },
        
        inputcontainer :{
        
            flexDirection : 'row',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            paddingBottom :10
            
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