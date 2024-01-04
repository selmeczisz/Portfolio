import React from 'react'
import'./Portfolio.css'
import { useState } from 'react'
import { useEffect } from 'react'
const url='https://raw.githubusercontent.com/selmeczisz/json/main/details.json'
import {getData} from '../utils'
import { Cards } from './Cards'


export const Portfolio = () => {
  const [projects, setProjects] = useState(null)

  useEffect(()=> {
      getData(url, setProjects)
  }, [])

  console.log(projects);

return (
  <>

  <div className='home'>
  <h5 >My projects</h5>

     <div className='portfolio-holder'>

      {projects && projects.map(obj=>(
            <div key={obj.id}>
                <Cards {...obj}/>
            </div>
        ))}
     </div>
    

    </div>
    </>
)
}