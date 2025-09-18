import React from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | My Website</title>
            <meta name="description" content="Get in touch with us." />
      </Helmet>
          <h1>Contact Page</h1>
    <p>This is the contact page.</p>    
    </div>
  )
}

export default Contact
