import React, {useEffect} from 'react'
import AddContactForm from '../addContactForm'
import { addContact } from './globalVars'

export default class AddContactScreen extends React.Component{
  handleSubmit=formState=>{
    this.props.route.params.addContact(formState);
  }
  useEffect(){
  console.log(this.props)
  }
  render(){
    console.log(this.props)
    return <AddContactForm onSubmit={this.handleSubmit}/>
  }

}


