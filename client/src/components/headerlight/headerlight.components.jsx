import React from 'react'
import { Link } from 'react-router-dom'

// assets
import { Logo } from '../../assets'

// components

// styles
import './headerlight.styles.css'

const Headerlight = () => {
  const NavOptions = [
    {
        option: 'Home',
        route: '/'
    },
    {
        option: 'Blog',
        route: '/blogs'
    },
    {
        option: 'Our Team',
        route: '/team'
    },
  ]


  return (
    <header>
        <div className="nav-left">
            <Link to="/">
                <img src={Logo} alt="" className="logo" />
            </Link>
            <h3 className='dark'>Healthgenic</h3>
        </div>
        
        <div className="nav-center">
            <ul>
                {NavOptions.map((nav) => (
                    <li className='dark'>
                        <Link to={nav.route} className='dark'>
                            {nav.option}
                        </Link>
                    </li>

                ))}
            </ul>
        </div>

        <div className="nav-right">
            <div className="get-started">
                <p>Get Started</p>
            </div>
        </div>
    </header>
  )
}

export default Headerlight