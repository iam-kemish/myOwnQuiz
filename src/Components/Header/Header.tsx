// import React from 'react'
import './Header.css'
import kemish from './kemish.jpg'
const Header = () => {
   
  return (
    <div className='app-header'>
  <img src={kemish} alt="" className='kemishImg' />
      <h1>My quiz</h1>
    </div>
  )
}

export default Header
