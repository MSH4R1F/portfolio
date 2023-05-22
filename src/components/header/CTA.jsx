import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className = 'cta'>
        <a href={CV} className="cv-link btn" target = "_blank">Download my CV here</a>
        <a href="#contact" className = "btn btn-primary">Contact me here</a>
    </div>
  )
}

export default CTA