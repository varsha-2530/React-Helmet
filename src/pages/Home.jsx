import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | My Website</title>
        <meta name='description' content="Welcome to the home page of this demo site."  />    
      </Helmet>
      <h1>Home Page</h1>
      <p>This is my homepage.</p>
    </div>
  )
}

export default Home
