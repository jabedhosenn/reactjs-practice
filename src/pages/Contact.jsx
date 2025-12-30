import React from 'react'
import './Contact.css'

function Contact(ContactProps) {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p>This is the Contact page of our React application.</p>
      <h3>Contact Name: {ContactProps.name ? ContactProps.name : "Guest User"}</h3>
    </div>
  )
}

export default Contact
// functional component