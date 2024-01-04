import React from 'react'
import'./Home.css'
import profile from "../assets/profile.jpg";


export const Home = () => {
  return (<>
    <div className='home'>
      <h5>Welcome to my portfolio!</h5>
      <div className='holder'>
        
        <div className="text">
      <p>My name is Szonja Selmeczi, and this page is a collection of my frontend journey: you will find info about me, my projects, previous workplaces and ongoing tasks.
       <br></br> If you wish to get in touch with me, just drop an email, I'm happy to get back to you. 
       <br></br>
       I'm working as a software tester but I'm looking for a junior frontend developer job at the moment, so feel free to contact me. 
       </p>
        </div>
        <div >
                <img className="image"src={profile} alt="profile picture" />

        </div>
      </div>
      
      

    </div>

</>
  )
}
