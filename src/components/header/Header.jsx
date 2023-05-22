import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import ME from '../../assets/1657388881390 - Copy.jpg'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Mohamed Sharif</h1>
            <h5 className = "text-light"> Computing Student at Imperial College London</h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
            <img src = {ME} alt = "me" />
            </div>
            <a href="#contact" className = "scroll_down">Scroll down</a>

        </div>
        
    </header>
  )
}

export default Header