import React from 'react'
import './header.css'
import Buttons from './Buttons'
import Socials from './Socials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>My name is</h5>
        <h1>Santiago Fonseca</h1>
        <h5 className='text-light'>Software Developer &amp; Computer Science and Engineering Student </h5>
        <Buttons/> 
        <Socials/>
        <div className='me'>
          <img src="../../images/me" alt="Me"></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header