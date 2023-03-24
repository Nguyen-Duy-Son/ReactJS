import React from 'react'
import "./Banner.css"
export const Banner = () => {
  return (
    <div class="banner">
      <div class="banner__left">
        <h1>Better Solutions For Your Business</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <div class="banner__left--bottom ">
          <a href="#" class="container_header--content--menu2--button started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=yGD_vo2C5Ec" class="started1">
            <i class="fa-regular fa-circle-play"></i>
            <span class="watch--video">Watch Video</span>
          </a>  
        </div>
      </div>
      <div class="banner__right">
        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" class="banner__right--img"></img>
      </div>
    </div>
  )
}
export default Banner;