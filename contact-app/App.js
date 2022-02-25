import * as React from 'react';
import { Text, View, StyleSheet , Button,SectionList} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import contacts,{compareNames} from './contacts'
import Row from './row';
import ContactsList from './contactsList'
import AddContactScreen from './Screens/AddContactScreen'
import {createSwitchNavigator} from 'react-navigation';
import ContactsListScreen from './Screens/ContactListScreen.js'

const AppNavigator =createSwitchNavigator({
  AddContact:AddContactScreen,
  ContactList:ContactsListScreen
},{
  initialRouteName:'ContactList'
})

export default class App extends React.Component{
  state={
    showContacts:true,
    showForm:false,
    contacts:contacts
  }

addContact=newContact=>{
  console.log('add',this.state);
  this.setState(prevState=>({showForm:false,contacts:[...prevState.contacts, newContact]}),this.sort())
}

  toggleContacts=()=>{
    this.setState(prevState=>({showContacts:!prevState.showContacts}));
  }
  toggleForm=()=>{
    this.setState(prevState=>({showForm:!prevState.showForm}));
  }
  sort=()=>{
    this.setState(prevState=>({contacts:prevState.contacts.sort(compareNames)}))
  }
  componentDidUpdate(){
    //console.log(contacts);
    console.log(this.state)
  }
 
  render(){
     return <AppNavigator/>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  btn:{
    marginBottom:5,
    backgroundColor:'pink'
  }
});
