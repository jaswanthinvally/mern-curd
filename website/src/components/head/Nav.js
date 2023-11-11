import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../head/nav.css'




const Nav = () => {
  return (
    <nav className=' main-nav navbar-expand-lg d-flex flex-row justify-content-between align-items-center p-2 '>
      <div className='navbar'><a className='text-decoration-none text-light'>JASWANTH</a></div>
      <div className='d-flex flex-row gap-3 align-items-center '>
        
        <li className='list-unstyled'><a className='text-decoration-none text-light'>about</a></li>     
        <li className='list-unstyled'><a className='text-decoration-none text-light'>project</a></li>     
        <li className='list-unstyled'><a className='text-decoration-none text-light'>contact</a></li>
        <button className='btn nav-btn'>hire me</button>
      </div>
    </nav>
  
  )
}

export default Nav