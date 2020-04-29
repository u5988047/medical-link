import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView, ScrollView,Text,Image, TextInput, TouchableOpacity, Button,Picker,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import { API_IP } from 'react-native-dotenv';
import { Card } from 'react-native-shadow-cards';

export default class codeDrugReceipt extends Component{

    constructor(props) {
        super(props);
        this.state = {
            datadrug: [],
            drugId: String,
            ID: String,
            DocID: String,
            Drug_List: String,
            Price: String,
            drugcode: String,
            drugtoken: String,
            secret: String,
            isGet: false,
            timer: 3600,
            minute: 0,
        };
        
    }
    
    componentDidMount(){
        this.interval = setInterval(
          () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
          1000
        );
      }

      componentDidUpdate(){
        if(this.state.timer === 0){ 
          clearInterval(this.interval);
        }
      }
      
      componentWillUnmount(){
       clearInterval(this.interval);
      }

    toResult() {
        if(this.state.timer < 1) {
            return (ToastAndroid.show('Your drug receive code is expired please get it again',ToastAndroid.SHORT))
        } else {
            Actions.successDrug({
                drugId: this.props.ID,
                secrets: this.state.secret,
            })
        }
    }
    
    toGetCode = () => {
        var getcode = 'http://192.168.0.109:3000/gendrugcode';
        axios.post(getcode, {
        }).then(r => {
            JSON.stringify(r)
            console.log(r.data.token)
            this.setState({secret: r.data.secret})
            this.setState({drugtoken: r.data.token})
            this.setState({isGet: true})
            this.setState({timer: 3600})
        })
    }

    tosuccess = () => {
        Actions.successDrug()
    }

    render() {
        const isGet = this.state.isGet;
        let showcode;
        if(isGet == true) {
            showcode = <View style = {styles.container}>
            <View style = {{padding: 8, borderWidth: 2, borderRadius: 8, borderColor: "gray", margin: 10}}>
                <Text style = {styles.Textshow, {textAlign: "center", marginTop: 5}}>Please send this Receving code to Pharmarcy</Text>
                <Text style = {styles.Textshow, {textAlign: "center", marginTop: 20, color: "green", fontSize: 35}}>{this.state.drugtoken}</Text>
        <Text style = {styles.Textshow, {textAlign: "center", marginVertical: 5}}>Time remaining: {this.state.timer} seconds</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer2} onPress={this.toResult.bind(this)}><Text style = {{color: "white"}}>Receive Result</Text></TouchableOpacity>
        </View>
        }

        return (
            <View style = {styles.container}>
            <Text style = {styles.head}>Request Information</Text>
                <View style = {styles.container}>
                <View style = {{padding: 8, borderWidth: 2, borderRadius: 8, borderColor: "gray", margin: 10}}>
                      <Text style = {styles.Textshow, {textAlign: "center"}}>Drug receipt details</Text>
                      <Text style = {styles.Textshow}>Drug Receipt ID: {this.props.ID}</Text>
                      <Text style = {styles.Textshow}>Doctor ID: {this.props.DocID}</Text>
                      <Text style = {styles.Textshow}>Druglist: {this.props.Drug_List}</Text>
                      <Text style = {styles.Textshow}>Price: {this.props.Price}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={this.toGetCode}><Text style = {{color: "white"}}>Get Receiving code</Text></TouchableOpacity>
                </View>
                {showcode}
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
       buttonContainer2 :{
        backgroundColor: '#B40431',
        paddingVertical:5,
        borderRadius : 25,
        width : 200,
        alignItems : 'center',
        justifyContent :'center',
        textAlign : 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 10
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
        Textshow :{
            fontSize : 14,
            marginVertical : 20,
            color : 'black'
        },
       
});