import React, { Component } from 'react'; 
import '../CSS/addContact.css';
import Card from '@material-ui/core/Card';
import { CardHeader, FormControl, Input,  CardContent, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';




class AddContact extends Component{

    constructor(props){
       
        super(props);
        this.state={
            id:'',
            name:'',
            phone:'',
            email:'',
            address:''
        }
     }

     componentWillReceiveProps=(nextprops)=>{
        
        if(nextprops.cont){
        this.setState({ id:nextprops.cont._id,
                        name:nextprops.cont.name,
                        phone:nextprops.cont.phone,
                        email:nextprops.cont.email,
                        address:nextprops.cont.address})
        }
    }

    


    handleSubmit=(event)=>{
    
    event.preventDefault();
    const contact = {
        name: this.state.name,
        phone:this.state.phone,
        email:this.state.email,
        address:this.state.address
        };
     this.props.addContact(contact);
    
     this.setState({name:'',email:'',phone:'',address:''})
    
    }

    handleUpdate=(event)=>{
     event.preventDefault();
     const contact = {
        name: this.state.name,
        phone:this.state.phone,
        email:this.state.email,
        address:this.state.address
        };

    this.props.updateContact(contact,this.state.id)
   
    this.setState({name:'',email:'',phone:'',address:''})
    }



    // handleChangeName=(event)=>{ this.setState({name:event.target.value});}
    // handleChangePhone=(event)=>{this.setState({phone:event.target.value});}
    // handleChangeEmail=(event)=>{this.setState({email:event.target.value})}
    // handleChangeAddress=(event)=>{this.setState({address:event.target.value});}

    handleChangeInput=(event)=>{
        this.setState({[event.target.name]: event.target.value})

    }
    
    render(){
        
        return(
     
              
              <div className="Add-Body">
                  <Card className="Card-Body" >
                    <CardHeader title="Add Contact" className="CardHeader" 
                    titleTypographyProps={{variant:"h5",gutterBottom:true}} ></CardHeader>
                    <CardContent>
                       <form className="Form-Main" onChange={this.handleChangeInput}>
                          <FormControl margin="normal" required fullWidth>
                              <InputLabel htmlFor="name">Name</InputLabel>
                              <Input id="name" value={this.state.name||''} name="name" autoComplete="name" 
                               autoFocus/>
                          </FormControl>
      
                          <FormControl margin="normal" required fullWidth>
                              <InputLabel htmlFor="email">Email</InputLabel>
                              <Input id="email" value={this.state.email ||''} name="email" autoComplete="email" 
                               />
                        </FormControl> 
      
                          <FormControl margin="normal" required fullWidth>
                              <InputLabel htmlFor="phone">Phone</InputLabel>
                              <Input id="phone" value={this.state.phone || ''} type="number" name="phone" autoComplete="phone" 
                               />
                          </FormControl> 
      
                          <FormControl margin="dense" required fullWidth>
                              <InputLabel htmlFor="address">Address</InputLabel>
                              <Input id="address"  value={this.state.address||''} name="address"  
                              />
                          </FormControl>   
      
                          <div className="buttons">
                            <Button  style={{margin:"60px",width:"25%"}} type="submit" id="btn_submit" variant="contained" 
                            color="primary" size="large" onClick={this.handleSubmit} disabled={this.props.btn_sub_disabled}>Submit</Button>

                            <Button  style={{margin:"60px",width:"25%"}} type="submit" id="btn_update" variant="contained" 
                            color="primary" size="large" onClick={this.handleUpdate} disabled={this.props.btn_up_disabled}>Update</Button>       
                            </div>
                       </form>
                   </CardContent>
                  
                  </Card>
             
                 </div>
          )

    }


}

export default (AddContact);