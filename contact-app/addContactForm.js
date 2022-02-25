import React from 'react';
import {TextInput, View, Button, StyleSheet,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants'

const styles=StyleSheet.create({
  input:{
    padding:5,
    borderColor:'black',
    borderWidth:1,
    minWidth:100,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:10
  },
  container:{
    flex:1,
    backgroundColor:'white',
    padding:40,
    paddingTop:Constants.statusBarHeight,
    justifyContent:'center'
  }
})
export default class AddContactForm extends React.Component {
 state={
   name:'',
   phone:'',
   isFormvalid:false
 }
 handleSubmit=()=>{
   console.log(this.state)
   this.props.onSubmit(this.state)
 }
  handleUpdate=key=>{
  return val=>{
      this.setState({[key]:val})
    }
  }
  handleChangeName=this.handleUpdate('name')
  handleChangePhone=this.handleUpdate('phone')
  validateForm=()=>{
    return (+this.state.phone>=0&&this.state.phone.length===10&&this.state.name.length>=3)?(this.setState({isFormvalid:true})):(this.setState({isFormvalid:false}));
  }
  componentDidUpdate(prevProps, prevState)
  {
    if(this.state.name!==prevState.name||this.state.phone!==prevState.phone)
    this.validateForm()
  }
  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput style={styles.input} value={this.state.name} onChangeText={this.handleChangeName} placeholder="Name" />
      <TextInput style={styles.input} value={this.state.phone} onChangeText={this.handleChangePhone} keyboardType="numeric" placeholder="Phone" />
      <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormvalid} />
      </KeyboardAvoidingView>
    )
  }
}