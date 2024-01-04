import React from 'react'
import'./AboutMe.css'


export const AboutMe = () => {
  return (
    <div className='home'>
      <h5>About me and my frontend journey</h5>
      <div className='portfolio-holder'>
        <p> Webpages always amused me, I wanted to learn how to create them as a teenager already. I started to learn HTML and played around for a while. After a longer gap, after university I started a programming course, but the backend part was a too big task for me at that time. I joined an infotechnology company as a software tester, but I always dreamed about becoming something more, someone with more creative energy, deep understanding of the programming logic and power to create new things. I never let go of that dream, so here I am. 


       <br></br> If you are interested in my past history of IT, read through the sections.  </p>
        <div >
          
      <div className="card-container">
       <div className="about-cards first">
        <h6>Courses</h6>
       <p>
       <ul><b>
        <li>2017: Desktop Publishing Certificate</li>
        <li>2018: Programming Basics Course</li>
        <li>2019: Certified Tester Foundation Level (CTFL)</li>
        <li>2023: Certified Tester - Mobile Application Testing (CT-MAT)</li>
        <li>Ongoing: Junior Frontend Developer Course</li></b>
       </ul>
       </p></div>
       
       <div className="about-cards second"><h6>Skills</h6>
       <p>
       <ul><b>
        <li>HTML</li>
        <li>CSS, SCSS</li>
        <li>React</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>Testing - manual and automated (Cypress)</li>
        <li>Postman</li>
        <li>Jira</li>
        <li>Photo editing (Photoshop, Gimp)</li></b>
       </ul>
       </p></div>
       
<div className="about-cards third"><h6>Languages</h6>
       <p>
       <ul><b>
        <li>English - Professional working proficiency</li>
        <li>German - Limited working proficiency</li>
        <li>Hungarian - Native</li>
        <li>Estonian - Elementary proficiency</li></b>
       </ul>
       </p></div>
       

       <div className="about-cards fourth"><h6>Hobbies</h6>
       <p>
       <ul><b>
        <li>Spending time in the nature: hiking, running</li>
        <li>Aerial arts (lyra, tissue, hammock, pole fitness) </li>
        <li>Volunteering for the Hungarian Tolkien Society</li>
        <li>Traveling and collecting memories</li>
        <li>Crotchet, macrame, loom knitting</li>
        <li>Learning languages</li></b>

       </ul>
       </p></div> </div>
        </div>
        
      </div>
      
    </div>
  )
}
