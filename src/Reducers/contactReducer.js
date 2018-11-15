import {EDIT_CONTACT,GET_CONTACT_SUCCESS, DELETE_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS,ADD_CONTACT_SUCCESS} from '../Actions/actionTypes';
import Immutable from 'immutable';


let initState = Immutable.fromJS({
    contacts: [],
    contact:{},
    sub_disabled:false,
    up_disabled:true
})

const contactReducer = (state = initState, action) => {
    
    switch(action.type){
        case GET_CONTACT_SUCCESS:
        //    state= {...state,contacts:action.payload}
           state = state.merge({contacts : action.payload})
           return state;
        
        
        case ADD_CONTACT_SUCCESS:
        //  state = {...state, contacts:[...state.contacts, action.payload]}
            state=state.contacts.merge(Map(action.payload))
            return state;


         case DELETE_CONTACT_SUCCESS:
          return {contacts: state.contacts.filter(con => con._id !== action.payload)}   


         case EDIT_CONTACT:
            state.sub_disabled=true;
            state.up_disabled=false;
            state={...state,contact:action.payload}
            return state;


        case UPDATE_CONTACT_SUCCESS:
            state.contact={};
            state.sub_disabled=false;
            state.up_disabled=true;
         
            const updatedItems=state.contacts.map((item)=>{
                if(item._id===action.payload._id){
                    return{...item,...action.payload}
                }               
                return item
             })
            return {...state, contacts:updatedItems}
         
        default:
            return state;

    }

}
export default contactReducer;