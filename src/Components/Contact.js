import React from 'react'

const Contact=({ contact, index}) => {
    return (
        <div className="contact" key={index}> 
          <h3>Name: {contact.Name}</h3>
          <h3>Phone: {contact.Phone}</h3>
          <h3>Location: {contact.Location}</h3>
          </div>
    )
}

export default Contact;