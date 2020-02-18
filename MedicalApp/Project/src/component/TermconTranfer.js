import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';
import { CheckBox } from 'react-native';

export default class TermconTranfer extends Component{

    constructor(){
        super();
        this.state = {
            checked : true
        }
    }
    checkBoxTest(){
        this.setState({
            check:! this.state.checked
        })
    }
    toTranferdata = () => {
        Actions.Tranferdata()
    }
    render() {

        return (
                <View style = {styles.container}>
                     <Text style = {styles.head}>Terms and Conditions</Text>
                        <Text style = {{paddingHorizontal:20, paddingVertical:20}}>แอพพลิเคชั่นสงวนสิทธิ์ในการจัดให้มีแอพพลิเคชั่นนี้เพื่ออำนวยความสะดวกในการติดต่อสื่อสารระหว่างท่านกับแอพพลิเคชั่นที่ต้องการทราบข้อมูลข่าวสาร ความเคลื่อนไหวต่างๆ ในการดำเนินธุรกิจของแอพพลิเคชั่น ทั้งนี้ ข้อมูลและสาระสำคัญที่ปรากฏในหน้าจอต่างๆ ตลอดจนข้อกำหนด เงื่อนไข และรายละเอียดต่างๆ ความถูกต้องครบถ้วนสมบูรณ์ ความเป็นปัจจุบัน และความต่อเนื่องของข้อมูลในเว็บไซต์นั้น อาจเปลี่ยนแปลงได้ตามดุลยพินิจของแอพพลิเคชั่น แอพพลิเคชั่นขอสงวนสิทธิ์ในคัดเลือกผู้ประสงค์ใช้บริการ การระงับหรือจำกัดขอบเขต รวมถึงการปฏิเสธสิทธิในการใช้บริการทางเว็บไซต์ทั้งหมดหรือบางส่วนแก่ผู้ใดก็ได้ตามเกณฑ์ของแอพพลิเคชั่น โดยไม่ต้องทำการแจ้งให้ท่านทราบแต่อย่างใด และไม่ถือว่าเป็นการกระทำให้ท่านหรือบุคคลใดเกิดความเสียหายใดๆ ไม่ว่าทางตรงหรือทางอ้อม และจะไม่ยกเว้นเงื่อนไขการให้บริการข้อมูลนี้ไม่ว่าส่วนใดให้แก่ผู้ใดทั้งสิ้น เว้นแต่จะทำเป็นลายลักษณ์อักษร และลงนามโดยผู้มีอำนาจลงนามของแอพพลิเคชั่น ทั้งนี้ หากท่านไม่สามารถดำเนินการได้ตามข้อตกลงและเงื่อนไขการใช้บริการ กรุณาหยุดการเข้าเว็บไซต์โดยทันที</Text>  
                        {/* <View style = {styles.center}>
                            <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />  
                        </View> */}
                    <View style={{ flexDirection: 'column'}}>
                      <View style={{ flexDirection: 'row' , paddingLeft: 12}}>
                        <CheckBox
                          style = {{paddingBottom: 10}}
                          value={this.state.checked}
                          onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{marginTop: 5}}>ยอมรับข้อตกลงและเงื่อนไข</Text>
                      </View>
                    </View>
                        
                     <View style = {styles.center}>
                       <TouchableOpacity style={styles.buttonContainer} onPress={this.toTranferdata}><Text style={{color :'white'}} >ถัดไป</Text></TouchableOpacity>
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