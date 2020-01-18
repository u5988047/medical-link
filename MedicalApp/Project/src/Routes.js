import React , {Component } from 'react';

import {Router, Stack,Scene} from 'react-native-router-flux';

import Login from './component/Login';
import OTP from './component/OTP';
import Menu from'./component/Menu';
import Authen from './component/Authen';
import drugReceipt from './component/drugReceipt';
import Signup from './component/Signup';
import Ekyc from './component/Ekyc';
import Tranferdata from './component/Tranferdata';
import Service from './component/Service';
import History from './component/History';
import Passcode from './component/Passcode';
import PasscodeTranferdata from './component/PasscodeTranferdata';
import TermconTranfer from './component/TermconTranfer';
import Idp from './component/Idp';
import WaitIDP from './component/WaitIDP';





export default class Routes extends Component {
     
    render(){
    return(
        <Router>
            <Stack key = "root" hideNavBar = {true}>
                <Scene key = "Login" component = {Login} title = "Login" initial ={true}  />
                <Scene key = "OTP" component = {OTP} title = "OTP" />
                <Scene key = "Menu" component = {Menu} title = "OTP" />
                <Scene key = "Authen" component = {Authen} title = "Authen" />
                <Scene key = "drugReceipt" component = {drugReceipt} title = "drugReceipt" />
                <Scene key = "Signup" component = {Signup} title = "Signup" />
                <Scene key = "Ekyc" component = {Ekyc} title = "Ekyc" />
                <Scene key = "Tranferdata" component = {Tranferdata} title = "Tranferdata" />
                <Scene key = "Service" component = {Service} title = "Service" />
                <Scene key = "History" component = {History} title = "History" />
                <Scene key = "Passcode" component = {Passcode} title = "Passcode" />
                <Scene key = "PasscodeTranferdata" component = {PasscodeTranferdata} title = "PasscodeTranferdata"  />
                <Scene key = "TermconTranfer" component = {TermconTranfer} title = "TermconTranfer"  />
                <Scene key = "Idp" component = {Idp} title = "Idp"  />
                <Scene key = "WaitIDP" component = {WaitIDP} title = "WaitIDP"  />
                
            </Stack>
        </Router>

    )

    }
}