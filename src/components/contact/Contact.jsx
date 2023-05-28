import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className = 'contact-icon' />
            <h4>Email</h4>
            <h5>msharabdq@gmail.com</h5>
            <a href="mailto:msharabdq@gmail.com" target='_blank'>Send me an email</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className = 'contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>+447424294132</h5>
            <a href="https://api.whatsapp.com/send?phone=447424294132" rel="noopener noreferrer" target='_blank'>Send me a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name = 'name' placeholder = "Your Full Name" required/>
          <input type="email" name = 'email' placeholder= "Your email" required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact