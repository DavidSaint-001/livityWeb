import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <div>
       <header>
        <nav class="nav-bar">
            <div class="text-flicker-in-glow"><h1>LIVITY</h1></div>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#shop">SHOP NOW</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT US</a></li>
                <li><a href="#">CART</a></li>
               
            </ul>

        </nav>
    </header>
      </div>
  )
}

export default navbar