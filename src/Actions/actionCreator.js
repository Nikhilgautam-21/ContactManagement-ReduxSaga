import { ADD_CONTACT, GET_CONTACT,UPDATE_CONTACT, DELETE_CONTACT,EDIT_CONTACT } from './actionTypes';

export const getContact=()=>{
  return{
    type:GET_CONTACT
  }
}

export const addContact=(contact)=>{
  return{
    type:ADD_CONTACT,
    payload:contact
  }
}

export const deleteContact=(id)=>{
  return{
    type:DELETE_CONTACT,
    payload:id
  }
}

export const editContact=(item)=>{
   
  return{
      type:EDIT_CONTACT,
      payload:item
  }
}


export const updateContact=(contact,id)=>{
  return{
      type:UPDATE_CONTACT,
      payload:{contact,id}
  }

}