import React from 'react';
import Button from '@mui/material/Button';


export const Cards = ({id, descr, photo,title, link}) => {
    return (
      <div className='cards' >
        <div><h6>{title}</h6>
                  <img src={photo} alt={title} className='portfolio-pics'/></div>

                  <div><p>{descr.slice(0,500)}</p>
                  <Button href={link}  variant="contained" color="success">For demo click here</Button> </div>

                  
              
      </div>
    )
  }
