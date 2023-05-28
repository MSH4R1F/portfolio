import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className = "header_socials">
        <a href = "https://www.linkedin.com/in/mohamed-sharif-549430200/" rel="noopener noreferrer" target="_blank"><SiLinkedin /></a>
        <a href="https://github.com/MSH4R1F"><BsGithub /></a>
        
    </div>
  )
}

export default HeaderSocials