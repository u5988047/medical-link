import React, {Component} from 'react';
import { Buttom, TextInput, ActivityIndicator, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LoadingdrugScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
          timePassed: false,
        };
      }

    render() {
        let that = this;
        setTimeout(() => {that.setState({timePassed: true})}, 5000);
        let wait;
        if (this.state.timePassed == false) {
            wait = <View>
                        <ActivityIndicator size='large' color='blue' style={{marginTop: 350}}/>
                    </View>
        }

        return (
            <View>
                {wait}
            </View>
        );
    }
}
