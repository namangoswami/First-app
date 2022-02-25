import contact,{compareNames} from '../contacts'
import { useState } from 'react'

var contacts=()=>[...contact]

export default  contacts
export const addContact=newContact=>{
    
    contact=[contact, newContact].sort()
  }