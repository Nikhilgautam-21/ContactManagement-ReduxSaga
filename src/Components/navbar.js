import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';


const NavBar = () =>{

    return(
      <div>
        <AppBar position="static" color="primary">
          <ToolBar className="Toolbar">
              <h1 style={{color:"#fff"}} >Contact Management</h1>
          </ToolBar>
        </AppBar>
      </div>
    )

}


export default NavBar;