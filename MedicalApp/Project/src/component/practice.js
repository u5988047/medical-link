import React, { Component } from 'react';
//Import React
import { View, Text, Picker, StyleSheet, SafeAreaView } from 'react-native';
//Import basic react native components
import MultiSelect from 'react-native-multiple-select';
//Import MultiSelect library
 
//Dummy Data for the MutiSelect
this.items = [
  { id: '1', name: 'America' },
  { id: '2', name: 'Argentina' },
  { id: '3', name: 'Armenia' },
  { id: '4', name: 'Australia' },
  { id: '5', name: 'Austria' },
  { id: '6', name: 'Azerbaijan' },
  { id: '7', name: 'Argentina' },
  { id: '8', name: 'Belarus' },
  { id: '9', name: 'Belgium' },
  { id: '10', name: 'Brazil' },
];
 
export default class App extends Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
  };
 
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };
 
  render() {
    const { selectedItems } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 30 }}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            ref={component => {
              this.multiSelect = component;
            }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          />
        </View>
      </SafeAreaView>
    );
  }
}