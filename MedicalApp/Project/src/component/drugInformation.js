import React, {Component} from 'react';
import {StyleSheet, View, Dimensions,Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
const { height } = Dimensions.get('window');


export default class drugReceipt extends Component{

    constructor() {
        super();
        this.state = {
            datadrug: [],  
            screenHeight: 0,
            isShow: false,
            showButton: false
        };
        
    }

    drugInform(){
        axios({
            url: 'http://192.168.0.109:3000/drugReceipt/drugReceipt',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((Data) => {
              console.log(Data.data);
              this.setState({
                datadrug: Data.data,
                isShow: true
              }) 
            }).catch(e => {
                console.log(e);
              });
              
        };

    toInput = () => {
            Actions.drugInputID()
        }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({screenHeight: contentHeight});
    }
    


    render() {
        const isShow = this.state.isShow;
        let datadisplay;
        if(isShow == false) {
            datadisplay = <View style = {{alignItems :'center',}}>

                    
            <TouchableOpacity style = {styles.buttonContainer} onPress = {this.drugInform.bind(this)}>
               <Text style = {{color : 'white'}}>Press for Information</Text>
            </TouchableOpacity>
        </View>
        }

        const scrollEnabled = this.state.screenHeight > height;
        const dataDrug = this.state.datadrug.map((item, index) => {
            var ID = ['ID: ',item.ID]
            var DTname = ['รหัสแพทย์ : ',item.Doctor_ID]
            var list = ['รายการยา : ',item.Drug_List]
            var price = ['ราคาที่ต้องชำระ : ',item.Price]
            var status = ['สถานะ : ', item.Status]
        const showButton = this.state.showButton;
        let actionbutton;
        if(item.Status == true) {
            actionbutton = <TouchableOpacity style = {styles.buttonReceipt2}>
            <Text style = {{color:'white'}}>Success</Text>
            </TouchableOpacity>
        } else {
            actionbutton = <TouchableOpacity style = {styles.buttonReceipt} onPress ={this.toInput}>
            <Text style = {{color:'white'}}>Receive</Text>
            </TouchableOpacity>
        }

        return  <View style={styles.listcard}>
                    <View>
        <Text style={{fontSize:20,fontWeight:'bold'}} key={index}>{ID}</Text>
                    </View>

                    <View>
                            <Text>{DTname}</Text>
                    </View>
                    
                    <View>
                            <Text>{list}</Text>
                    </View>

                    <View>
                            <Text>{price}</Text>
                    </View>

                    <View>
                        {actionbutton}
                    </View>

                </View>;
        })

        return (
                <View style = {styles.container}>
                    
                    <Text style = {styles.head}>Drug Receipt Information</Text>

                        <SafeAreaView>

                                <ScrollView 
                                    style={{flexDirection:'column'}}
                                    scrollEnable = {scrollEnabled}
                                    onContentSizeChange = {this.onContentSizeChange}
                                >
                                        {dataDrug}
                    
                    {datadisplay}
                        <Text>{"\n\n\n"}</Text>
                    
                    </ScrollView>

                    </SafeAreaView>
                </View>

              );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
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
        fontSize:20,
        paddingTop: 5
    },
    Textshow :{
        fontSize : 20,
        marginBottom : 20,
        color : 'black'
 
    },
    buttonContainer :{
        backgroundColor :'#B40431',
        paddingVertical : 15,
        height :50,
        width : 150,
        marginTop :20,
        marginBottom : 20,
        borderRadius : 25,
        alignItems :'center'
        

   },
   buttonReceipt :{
    backgroundColor :'orange',
    height : 30,
    width : 100,
    marginTop : 5,
    marginLeft: 120,
    borderRadius : 25,
    alignItems :'center',
    paddingTop: 5
    },

    buttonReceipt2 :{
        backgroundColor :'green',
        height : 30,
        width : 100,
        marginTop : 5,
        marginLeft: 120,
        borderRadius : 25,
        alignItems :'center',
        paddingTop: 5
        },

    listcard: {
        padding: 8, 
        borderWidth: 2, 
        borderRadius: 8, 
        borderColor: "gray", 
        margin: 10
    },

});