import React from 'react'
import  "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
         <h1>Contact Us</h1>
      <p className="intro">
        Fill out the form below or reach us through any of our contact details.
      </p>

      <div className="contact-details">
        <p><strong>Call:</strong> +234 814 679 7007</p>
        <p><strong>Email:</strong> Elomaserome@gmail.com</p>
        <p><strong>Visit:</strong> 123 Black & White Street, Lagos, Nigeria</p>
      </div>

      <form className="contact-form"
      action={"https://formspree.io/f/mjkagqla"}
      method='POST'>
        
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email *" required />
        <input type="tel" placeholder="Phone number" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact