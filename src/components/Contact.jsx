import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import'./Contact.css'

export const Contact = () => {
  return (
    <div className='home'>
      <h5>Contact me!</h5>
      <div className='holder'>
        
        <div className="text">
      <p> If you have questions, ideas, you want to work with me or just want to grab a coffee with me, do not hesitate to contact me!     </p>
      <p>Just click on the icons below and write me!</p>
       <div className='contact'>
        <div><a href="https://www.linkedin.com/in/szonja-selmeczi-0a2a2696/"><LinkedInIcon fontSize="large"/></a></div> 
        <div><a href="https://github.com/selmeczisz"><GitHubIcon fontSize="large"/></a></div>
        <div><a href="https://www.facebook.com/szonja.selmeczi/"><FacebookIcon fontSize="large"/></a></div>
        <div><a href="mailto:selmeczi.szonja@gmail.com"><EmailIcon fontSize="large"/></a></div>
        </div>
   
        </div>
        
        </div>
      </div>
      

    
  )
}
