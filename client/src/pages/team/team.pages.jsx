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
        <h1 className="heading">Our Team</h1>
        <div className="member">
        
        <div className="member1"> 
        <img className="profileimg" src={shahana} alt=""/> 
        <div class="caption">Shahana</div>
        </div>
       
        <div className="member2"> 
        <img  className="profileimg" src={nikhita} alt=""/>
        <div class="caption">Nikhita</div>
        </div>

        <div className="member3">
        <img  className="profileimg" src={siddhant} alt=""/>
        <div class="caption">Siddhant</div>

        </div>

        </div>
        
    </div>
  )
}
export default Teams


