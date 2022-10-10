import React, { useState } from 'react';
import{AppBar,Tab, Tabs, Toolbar,Typography} from "@mui/material";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
   const [value, setValue]=useState();
  return ( 

    <div>
  <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
      <Toolbar>

         <NavLink to="/" style={{color:"white"}}>
            <Typography>
               <LibraryBooksOutlinedIcon/>
            </Typography>
         </NavLink>

    <Tabs sx={{ml: "auto"}} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>setValue(val)}>

      <Tab component={Link} label="Add Product" to="/add" />
      <Tab component={Link} label="books" to="/books" />
      <Tab component={Link} label="about" to="/about" />

    </Tabs>

   </Toolbar>
 </AppBar>

  </div>
 );

};

export default Header;
