import React from "react"
import './team.styles.css'

import shapes from './shapes.png'
import shahana from './shahana.png'
import nikhita from './nikhita.png'
import siddhant from './siddhant.png'


const Teams = () => {
  return (
    <div className='team'>
        
        <div className="image">
        <img src={shapes} alt=""/>
        </div>
        <h1>Our Team</h1>
        <div className="member">
        <img src={shahana} alt=""/> 
        <img src={nikhita} alt=""/>
        <img src={siddhant} alt=""/>
        </div>
        
    </div>
  )
}
export default Teams


