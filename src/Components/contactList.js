import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import '../CSS/contactList.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';



class ContactList extends Component{

  
  componentDidMount=()=>{
    this.props.getContact();
  }
 
  handleRefresh=()=>{
    this.props.getContact();
  }

  handleDelete=(id)=>{
    this.props.deleteContact(id);
  }
   
  handleEdit=(item)=>{
    this.props.editContact(item);
  }
    
 render(){
  
  const tableRows = this.props.contacts.map((item, index) => {
    return <TableRow key={item._id}>
        <TableCell>{index+1}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.phone}</TableCell>
        <TableCell >{item.address}</TableCell>
        <TableCell>
          <Button variant="contained"  size="small"id="btn-edit" onClick={()=>  this.handleEdit(item)}>Edit</Button>
          <Button variant="contained"  size="small" id="btn-del" onClick={() => this.handleDelete(item._id)} >Delete</Button>
        </TableCell>
              
         
    </TableRow>

});  

    return(
      <div className="Contact-List">
      <Button id="btn_Refresh" variant="contained" color="primary" size="large" onClick={this.handleRefresh} >Refresh</Button> 
        <Table className="tbl-contacts">
            <TableHead className="tbl-data-head">
                <TableRow>
                    <TableCell id="th" >#</TableCell>
                    <TableCell id="th">Name</TableCell>
                    <TableCell id="th">Email</TableCell>
                    <TableCell id="th">Phone</TableCell>
                    <TableCell id="th">Address</TableCell>
                    <TableCell id="th">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {tableRows}
            </TableBody>
            
        </Table>
      </div>
    )
  }
   
}




export default (ContactList);
