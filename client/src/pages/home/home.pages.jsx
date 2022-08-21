import React from 'react'

// components
import { Hero, Abstract, FeaturedTherapy, HealthMatter } from '../../components'


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

        <div className="section-meditate">
          <Abstract/>
          <div className="quote-section">
             <p>You <b>don&lsquo;t</b> have to <b>struggle</b> in silence!</p>
            <p>Life is <b>tough</b> but so are <b>you</b>.</p>
          </div>
        </div>

        <div className="therapy-sec">
          <FeaturedTherapy/>
        </div>
        <div className="health-section">
          <HealthMatter />
        </div>
      </div>
    </div>
  )
}

export default Home