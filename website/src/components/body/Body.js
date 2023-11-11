import React from 'react'
import '../body/body.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  return (
    <div className='main-div'>
    <div>
    <img
            src='../body/jaswanth.jpg'
            className='img'
        />
    </div>
    <div className='ps-4'>
        <h1 className='text-light'>I am <span>jaswanth</span></h1>
        <p className='text-light'>fullstack developer</p>
        <button className='contact-btn'>contact</button>
    </div>

    </div>
  )
}

export default Body