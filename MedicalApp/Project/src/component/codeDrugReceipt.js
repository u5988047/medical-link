import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
export default class WaitIDPDelete extends Component{

    constructor() {
        super();
        this.state = {
            datadrug: [],  
            
           
        };
        
    }

    drugInform(){
        // var url = 'http://localhost:3000/users/checkuser';
        // axios.get(url)
        // .then((Data) => {
        //   console.log(Data.data);
        //   this.setState({
        //     datamong: Data.data,
        //   }) 
        // })
        axios({
            url: 'http://'+API_IP+':3000/drugReceipt/drugReceipt',
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
    toresult = () => {
        Actions.Menu()
}
    tosuccess = () => {
    Actions.successDrug()
}
    render() {
        const dataMongo = this.state.datadrug.map((item, index) => {
            // var ID = ['ID: ',item.ID]
            // var DTname = ['แพทย์ : ',item.แพทย์]
            // var list = ['รายการยา : ',item.รายการยา]
            // var price = ['ราคาที่ต้องชำระ : ',item.ราคาที่ต้องชำระ]
            var code = ['รหัสยืนยัน : ',item.รหัสยืนยัน]

        return  <View>
                    
                    <View style = {{borderBottomWidth : 1 , flexDirection:'row',justifyContent:'space-between'  }}>
            <Text style = {styles.Textshow}>{code}</Text>
                 
                
                    </View>
                </View>;
        })


        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Code</Text>  

                     

                     <View style={{flexDirection:'column'}}>
                        {dataMongo}
                        
                    </View>
                            <View style = {{alignItems:'center'}}>
                    <TouchableOpacity style = {styles.buttonContainer} onPress = {this.drugInform.bind(this)}>
                           <Text style = {{color : 'white'}}>Press for Code</Text>
                        </TouchableOpacity>
                            </View>
                    <View style = {{   borderRadius : 25 ,marginBottom : 20,alignItems:'flex-end'}}>
                        <TouchableOpacity style={styles.buttonReceipt} onPress={this.tosuccess}><Text style={styles.buttonText} >Next</Text></TouchableOpacity>
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
            marginBottom : 20,
            paddingHorizontal : 30,
            width : '100%',
            alignItems :'center',
            textAlign:'center',
            color: '#FFFF',
            fontSize:20
        },
        logo:{
            width :150,
            height : 150
        },
        logoContainer :{
            alignItems : 'center',
            flexGrow : 1,
            justifyContent:'center'
        },
        buttonContainer :{
            backgroundColor :'#B40431',
            paddingVertical : 15,
            height :50,
            width : 100,
            marginBottom : 20,
            borderRadius : 25,
            alignItems :'center'
            
    
       },
        buttonText: {
            textAlign: 'center',
            color: '#FFFF',
            fontWeight:'400',
             height: 30,
             fontSize:20
        },
        Textshow :{
            fontSize : 20,
            marginBottom : 20,
            color : 'black'
     
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