import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity, Button,CheckBox,} from 'react-native';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
export default class drugReceipt extends Component{
    
    constructor() {
        super();
        this.state = {
            datadrug: [],  
            
           
        };
        
    }
    onePresses(){
        this.setState({one:true,two:false})
    }
    twoPresses(){
        this.setState({one:false,two:true})
    }

    checkBoxTest(){
        this.setState({
            check:! this.state.check
        })
    }


    drugInform(){
        axios({
            url: 'http://192.168.0.104:3000/drugReceipt/drugReceipt',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((Data) => {
              console.log(Data.data);
              this.setState({
                datadrug: Data.data,
              }) 
            }).catch(e => {
                console.log(e);
              });
              
        };

    toIDP = () => {
        
            Actions.WaitIDPReceipt()
        }
    toInput = () => {
        
            Actions.drugInputID()
        }
    render() {
        const dataMongo = this.state.datadrug.map((item, index) => {
            var ID = ['ID: ',item.ID]
            var DTname = ['แพทย์ : ',item.แพทย์]
            var list = ['รายการยา : ',item.รายการยา]
            var price = ['ราคาที่ต้องชำระ : ',item.ราคาที่ต้องชำระ]
            var code = ['รหัสยืนยัน : ',item.รหัสยืนยัน]

        return  <View>
                    <View>
            <Text style={{fontSize:20,fontWeight:'bold'}} key={index}>{ID}</Text>
                    </View>
                    <View>
            <Text>{DTname}</Text>
                    </View>
                    <View>
            <Text>{list}</Text>
                    </View>
                    <View  style = {{borderBottomWidth : 1}}>
            <Text>{price}</Text>
                    </View>
                </View>;
        })

        return (
                <View style = {styles.container}>
                    
                    <Text style = {styles.head}>Drug Receipt Information</Text>

                    <View>

                    <View style={{flexDirection:'column'}}>
                        {dataMongo}
                        
                    </View>
                        {/* <Text style = {styles.Textshow}>
                            ID : 00001
                        </Text>
                        <Text style = {styles.Textshow}>
                            โรงพยาบาล : Hospital1
                        </Text>
                        <Text style = {styles.Textshow}>
                            แพทย์ : DT0005
                        </Text>
                        <Text style = {styles.Textshow}>
                            รายการยา : ยาแก้ปวด,ยาลดไข้
                        </Text>
                        <Text style = {styles.Textshow}>
                            ราคาที่ต้องชำระ : 500 บาท
                        </Text>
                        <Text style = {styles.Textshow}>
                            รหัสยืนยัน : 159632
                        </Text> */}

                    </View>

                    
                    <View style = {{alignItems :'center',}}>

                    
                        <TouchableOpacity style = {styles.buttonContainer} onPress = {this.drugInform.bind(this)}>
                           <Text style = {{color : 'white'}}>Press for Information</Text>
                        </TouchableOpacity>
                    </View>
                   
                   <View style = {{alignItems :'flex-end'}}>
                       <TouchableOpacity style = {styles.buttonReceipt} onPress ={this.toInput}>
                           <Text style = {{color:'white'}}>Next</Text>
                       </TouchableOpacity>
                   </View>
                    
                    
                </View>

              );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
        // flexDirection :'row',
        
        
      
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
    backgroundColor :'green',
    paddingVertical : 15,
    height :50,
    width : 100,
    marginBottom : 20,
    borderRadius : 25,
    alignItems :'center',
    
    

},

});