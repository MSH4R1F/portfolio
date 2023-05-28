import React from 'react'
import './about.css'
const About = () => {
  return (
    <section id = "about" className="about_container">
        <h5>Who Am I</h5>
        <h2 className="about_title_large">About Me</h2>
        <div className="about_me">
          <p>
          I am Mohamed Sharif, a 1st Year MEng Computing student at Imperial College London, driven by a deep curiosity for the forces shaping our future modern world.
          With a passion for computer science and an eagerness to learn, I aim to apply my analytical and technical skills to develop real-world applications and solve the greatest challenges we face.
          I am actively seeking opportunities, such as internships and projects, to further enhance my skills and gain hands-on experience in the field.
          I am eager to collaborate with diverse teams to gain a range of different skills and continuously grow as a professional engineer, I embrace the opportunity to learn from different perspectives and contribute to building a better future.
          </p>
        </div>
        <a href="#contact" className = "btn btn-primary">Let's Talk</a>
    </section>
  )
}

export default About
