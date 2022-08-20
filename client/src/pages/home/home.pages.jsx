import React from 'react'

// components
import { Hero, Abstract } from '../../components'


// styles
import './home.styles.css'

const Home = () => {
  return (
    <div className='home-page'>
      <section>
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="page-content">
        <Hero/>
      </div>

      <div className="section-meditate">
        <Abstract/>
      </div>
    </div>
  )
}

export default Home