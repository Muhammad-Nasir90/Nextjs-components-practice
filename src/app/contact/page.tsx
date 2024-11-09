// components/Contact.js
import React from 'react';
import '../styles/style.css';  // Import the custom CSS file

export default function Contact() {
  return (
    <div className="contact">
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>

      <div className="contact-info">
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>

        <div className="contact-item">
          <h2>Email</h2>
          <p>contact@mywebsite.com</p>
        </div>

        <div className="contact-item">
          <h2>Address</h2>
          <p>1234 Main Street, Anytown, USA</p>
        </div>
      </div>
    </div>
</div>  
);
}
