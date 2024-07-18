import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
  
     <nav className="sidebar">
     <ul className="side-nav">
      <li className="  side-nav_item side-nav_item--active ">
        <a href="#" className="side-nav_link">
        <i class="fa-solid fa-house side-nav_icon"></i>
        <span>Hotel</span>
        </a>
      </li>
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
        <i class="fa-solid fa-plane-departure side-nav_icon"></i>
        <span>Flight</span>
        </a>
      </li>
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
        <i class="fa-solid fa-key side-nav_icon"></i>
        <span>Car Rental</span>
        </a>
      </li>
      <li className="side-nav_item">
        <a href="#" className="side-nav_link">
        <i class="fa-regular fa-map side-nav_icon"></i>
        <span>Tours</span>
        </a>
      </li>
     
     </ul>
      

<div className="legal">
  &copy;  2024 By Trillo. All rights Reserved.
</div>
     </nav>
  
  )
}

export default Sidebar