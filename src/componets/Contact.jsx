import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://ejomaserome.getform.com/gk7x5', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro">
        Fill out the form below or reach us through any of our contact details.
      </p>

      <div className="contact-details">
        <p><strong>Call:</strong> +234 814 679 7007</p>
        <p><strong>Email:</strong> Elomaserome@gmail.com</p>
        <p><strong>Visit:</strong> 123 Black & White Street, Lagos, Nigeria</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email *" required />
        <input type="tel" name="phone" placeholder="Phone number" />
        <textarea name="message" placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>

      {status && (
        <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;
