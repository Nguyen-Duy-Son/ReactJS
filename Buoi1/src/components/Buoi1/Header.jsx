import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div class="container_header">
      <h1 class="container_header--logo">
        <a href="index.html">Arsha</a>
      </h1>
      <div class="container_header--content">
        <ul class="container_header--content--menu menu1">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#/">Team</a></li>
          <li class="dropdown">
            <a href="#">Drop Down
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <ul class="container_header--content--menu2 menu2">
              <li><a href="#">Drop Down 1</a></li>
              <li class="deep_dropdown">
                <a href="#">Deep Drop Down
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
                <ul class="menu3">
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
          <li class="getstarted"><a href="#" class="container_header--content--menu2--button buttonstarted">Get Started</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header