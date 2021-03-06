import {put, takeLatest,call,all} from 'redux-saga/effects';
import axios from 'axios';
import {GET_CONTACT, GET_CONTACT_SUCCESS, ADD_CONTACT, ADD_CONTACT_SUCCESS, DELETE_CONTACT, UPDATE_CONTACT, 
        DELETE_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS} from '../Actions/actionTypes';




const baseUrl = 'http://localhost:8000/api';

export function* getContactSaga(){
    try{
    const response= yield call(axios.get,(`${baseUrl}/contact`))
  
    yield put({type:GET_CONTACT_SUCCESS,payload:response.data})
    }
    catch(e){
      console.log(e);
    }
}


export function* addContactSaga(action){
  try{
    const response = yield call(axios.post,(`${baseUrl}/addcontact`),action.payload)
    yield put({type:ADD_CONTACT_SUCCESS,payload:response.data})
  }
  catch(e){
    console.log(e)
  }
}


export function* deleteContactSaga(action){
  try{
    const response= yield call(axios.delete,(`${baseUrl}/delete/${action.payload}`))
    yield put({type:DELETE_CONTACT_SUCCESS,payload:response.data._id})
  }
  catch(e)
  {
    console.log(e)
  }
}



export function* updateContactSaga(action){
  try{
      const response= yield call(axios.put,(`${baseUrl}/update/${action.payload.id}`),action.payload.contact)
      yield put({type:UPDATE_CONTACT_SUCCESS,payload:response.data})
  }
  catch(e){
    console.log(e);
  }
}


export function* watchAll (){
  yield all([takeLatest(UPDATE_CONTACT,updateContactSaga),
            takeLatest(DELETE_CONTACT,deleteContactSaga),
            takeLatest(ADD_CONTACT,addContactSaga),
            takeLatest(GET_CONTACT,getContactSaga)
             
        ]);
}