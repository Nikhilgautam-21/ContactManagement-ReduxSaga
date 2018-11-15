import { combineReducers } from 'redux';
import contactReducer from "./contactReducer";

const reducers={

    contactReducer: contactReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;