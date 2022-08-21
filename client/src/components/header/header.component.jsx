import React from 'react'
import { Link } from 'react-router-dom'

// assets
import { Logo } from '../../assets'

// components

// styles
import './header.styles.css'

const Header = () => {
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
            <h3>Healthgenic</h3>
        </div>
        
        <div className="nav-center">
            <ul>
                {NavOptions.map((nav) => (
                    <li>
                        <Link to={nav.route}>
                            {nav.option}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className="nav-right">
          <Link to="/dashboard">
            <div className="get-started">
                <p>Get Started</p>
            </div>
          </Link>
        </div>
    </header>
  )
}

export default Header