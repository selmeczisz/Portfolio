import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export const Navbar = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const navigate = useNavigate()
  
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs className='navbar'
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Home" onClick={()=> navigate('/')}/>
          <Tab value="three" label="Portfolio" onClick={()=> navigate('/portfolio')}/>
          <Tab value="two'" label="About Me" onClick={()=> navigate('/about')}/>
          <Tab value="four" label="Contact" onClick={()=> navigate('/contact')}/>

        </Tabs>
      </Box>
    );
  }
