import React, { Component } from 'react';
import NavBar from './Components/navbar';
import AddContact from './Components/addContact';
import ContactList from './Components/contactList';
import {getContact,addContact,editContact,deleteContact,updateContact} from './Actions/actionCreator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="Main-Body">
   
   <div className="Add-Body">
     <AddContact addContact={this.props.addContact}
                 updateContact={this.props.updateContact}
                 cont= {this.props.contact}
                 btn_up_disabled={this.props.btn_up_disabled}
                 btn_sub_disabled={this.props.btn_sub_disabled}
                />
   </div>
   
    
   <div className="List-Body">
     <ContactList
       deleteContact={this.props.deleteContact}
       editContact={this.props.editContact}
       contacts= {this.props.contacts}
       getContact={this.props.getContact}
/>
   </div>
        
      </div>
     </div> 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getContact,addContact,editContact,updateContact,deleteContact

  }, dispatch);
}


const mapStateToProps = (state) => {
  return {
      contacts:state.contactReducer.get('contacts'),
      contact : state.contactReducer.contact,
      btn_up_disabled: state.contactReducer.up_disabled,
      btn_sub_disabled:state.contactReducer.sub_disabled

  };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

