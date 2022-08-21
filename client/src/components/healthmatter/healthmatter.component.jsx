import React from 'react'
import { Nurse } from '../../assets'
import './healthmatter.styles.css'

const Healthmatter = () => {
  return (
    <div className='health-matter-component'>
        <div className="health-left">
            <h1>Your Mental Health Matter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="health-right">
            <img src={Nurse} alt="" />
        </div>
    </div>
  )
}

export default Healthmatter;