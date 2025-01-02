// Imports
import React from 'react'
import "./contact.css"
import send from "../../images/send.png"
import contact_img from "../../images/contact-img.png"

function Contsct() {
  return (
    <section className='contact'>
      <div>
        <h1>Get in touch</h1>
        <p>Reach out, and let's create a universe of possibilities together!</p>
      </div>
      <div className="container">
        <form action="">
          <div className="left">
            <div>
              <h3>Let’s connect constellations</h3>
              <p>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
            </div>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="tel" placeholder='Phone Number' />
            <textarea name="" id="" placeholder='Message'></textarea>
            <button type='submit'>Send it to the moon <img src={send} alt="send" /></button>
          </div>
          <div className="right">
            <img src={contact_img} alt="contact_img" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contsct
