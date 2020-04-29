import React, {Component} from 'react';
import { Buttom, TextInput, TouchableOpacity, ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LoadingScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
          timePasseds: false,
        };
      }

      toInput = () => {
        Actions.WaitIDP();
    }  

    render() {
        let that = this;
        setTimeout(() => {that.setState({timePasseds: true})}, 5000)
        let wait;
        if (this.state.timePasseds == false) {
            wait = <View>
                        <ActivityIndicator size='large' color='blue' style={{marginTop: 350}}/>
                    </View>
        } else {
            wait = <TouchableOpacity style = {styles.buttonContainer} onPress = {this.toInput.bind(this)}>
               <Text style = {{color : 'white', marginLeft: 50}}>Result</Text>
            </TouchableOpacity>
        }

        return (
            <View>
                {wait}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer :{
        backgroundColor :'#B40431',
        paddingVertical : 15,
        height :50,
        width : 150,
        marginTop :350,
        marginBottom : 20,
        borderRadius : 25,
        marginLeft: 140
   },
})


