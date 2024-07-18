import React from 'react'
import './header.scss'
import logo from  '../../img/logo.png'
import userPhoto  from '../../img/user.jpg'

const Header = () => {
  return (

<header className="header">

<img src={logo} alt="logo" className="logo" />

<form action="#" className="search">
  <input type="text" className="search_input" placeholder='Search hotels' />
  <button className="search_button">
  <i class="fa-solid fa-magnifying-glass search_icon"></i>
  </button>
</form>

<nav className="user-nav">
  <div className="user-nav_icon-box">
  <i class="fa-solid fa-bookmark user-nav_icon"></i>
    <span className='user-nav_notification'>7</span>
  </div>
  <div className="user-nav_icon-box">
  <i class="fa-solid fa-message user-nav_icon"></i>
  <span className='user-nav_notification'>13</span>
  </div>
  <div className="user-nav_user">
 <img src={userPhoto} alt="userPhoto" className="user-nav_user_image" />
 <span className='user-nav_user-name'>Ayoola</span>
  </div>
</nav>
</header>


  )
}

export default Header