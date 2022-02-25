import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import contacts,{compareNames} from '../contacts'
// import contacts from './globalVars'
import ContactsList from '../contactsList';

export default class ContactListScreen extends React.Component{
  state={
    showContacts:true,
    contacts:contacts
  };

  addContact=newContact=>{
    console.log('add',this.state);
    this.setState(prevState=>({showForm:false,contacts:[...prevState.contacts, newContact]}),this.contacts.sort())
  }
  toggleContacts=()=>{
    this.setState(prevState=>({showContacts:!prevState.showContacts}))
  }
  showForm=()=>{
    
    // this.props.navigation.setOptions({addContact:this.addContact})
    this.props.navigation.navigate('AddContact',{addContact:this.addContact} )
  }

render(){
   console.log(this)
  return(
    <View style={styles.container}>
    <Button title={this.state.showContacts.toString()} onPress={this.toggleContacts}/>
    <Button title="Add Contact" onPress={this.showForm}/>
    {
     this.state.showContacts&&(
   <ContactsList  contacts={this.state.contacts}/>
    )}
      </View>
    )

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
