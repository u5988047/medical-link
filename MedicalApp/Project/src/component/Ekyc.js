import React, {Component} from 'react';
import {StyleSheet, View,Text,Image, TextInput, TouchableOpacity,Picker} from 'react-native';
import {Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';

export default class Ekyc extends Component{
    constructor(props){
        super(props)
        //set value in state for initial date
        this.state = {date:"15-05-1997"}
      }
      state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   tomenu = () => {
    Actions.Menu()
}
    render() {
      
        return (
                <View style = {styles.container}>
                    <Text style = {styles.head}>กรุณากรอกข้อมูล </Text>
                        
                        
                        <View style = {styles.inputcontainer}>
                                <Text style = {styles.inputheader}>ชื่อ-นามสกุล</Text>   
                                         <TextInput 
                                             placeholder = "สมิธ ปาน"
                                             placeholderTextColor = 'gray'
                                             
                                             style = {styles.input}/>
                       
                       </View>
                       
                       <View style = {styles.inputcontainer}>
                                <Text style = {styles.inputheader}>Fullname</Text>   
                                         <TextInput 
                                             placeholder = "Smith Pan"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>วัน / เดือน/ ปีเกิด</Text>   
                                
                                <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
           
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>หมายเลขบัตรประชาชน</Text>   
                                         <TextInput 
                                             placeholder = "11000505245256"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>เลขหลังบัตรประชาชน</Text>   
                                         <TextInput 
                                             placeholder = "MEO-26166230-22"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>เพศ</Text>   
                                         {/*<TextInput 
                                             placeholder = "ชาย หรือ หญิง"
                                             placeholderTextColor = 'gray'
                                         style = {styles.input} />*/}
                                         <Picker
                                            selectedValue={this.state.language}
                                            style={{height: 50, width: 100}}
                                            onValueChange={(itemValue, itemIndex) =>
                                            this.setState({language: itemValue})
                                        }>
                                        <Picker.Item label="ชาย" value="male" />
                                        <Picker.Item label="หญิง" value="female" />
                                    </Picker>
                                         
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>ที่อยู่ปัจจุบัน</Text>   
                                         <TextInput 
                                             placeholder = "ที่อยู่ปัจจุบัน"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>ที่อยู่ตามทะเบียนบ้าน</Text>   
                                         <TextInput 
                                             placeholder = "ที่อยู่ตามทะเบียนบ้าน"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>สถานะสมรส</Text>   
                                <Picker
                                            selectedValue={this.state.language}
                                            style={{height: 50, width: 100}}
                                            onValueChange={(itemValue, itemIndex) =>
                                            this.setState({language: itemValue})
                                        }>
                                        <Picker.Item label="โสด" value="s" />
                                        <Picker.Item label="แต่งงาน" value="m" />
                                    </Picker>
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>อาชีพ</Text>   
                                         <TextInput 
                                             placeholder = "โปรดระบุ"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>สถานที่ทำงาน</Text>   
                                         <TextInput 
                                             placeholder = "DomeCloud"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>ที่อยู่สถานที่ทำงาน</Text>   
                                         <TextInput 
                                             placeholder = "123 หมู่ 4 ตำบล บ้านกลาง อำเภอ แม่ริม"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                       <View style = {styles.inputcontainer}>
                                <Text>รายได้</Text>   
                                         <TextInput 
                                             placeholder = "โปรดระบุต่อเดือน"
                                             placeholderTextColor = 'gray'
                                             style = {styles.input} />
                       
                       </View>
                        <View style = {styles.center}>
                       <TouchableOpacity style={styles.buttonContainer} onPress={this.tomenu}><Text style ={{color : 'white'}} >ถัดไป</Text></TouchableOpacity>
                       </View>
                </View> 

               

        );
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        flex : 1,
        borderRadius : 2,
        borderWidth : 0.5,
        borderColor : 'black'
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

    inputheader : {
        paddingTop: 10
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
    center :{
        
        alignItems :'center',
        paddingBottom : 10
    },
  

});