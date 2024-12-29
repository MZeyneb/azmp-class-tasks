import React from 'react'
import { Helmet } from 'react-helmet-async'
import "../Home/index.css"
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div className='home'>
      <h1>HELLO! WELCOME</h1>
    </div>
    </>
  )
}

export default Home
