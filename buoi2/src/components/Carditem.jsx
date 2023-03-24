import React from 'react';
import './Carditem.css';
const Carditem = (props) => {
  return (
    <div className="card_item">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <img src={props.rectangle} alt="" className='img_rectangle'></img>
      <div className="item_box">
        <img src={props.src} alt="" className='img_src'></img>
        <div className="item_box-right">
          <img src={props.ellipse} alt="" className='img_ellipse'></img>
          <img src={props.vector} alt="" className='img_vector'></img>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <div className="item_box--finish">
            <p>Learn more</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        
      </div>   
    </div>
  )
}

export default Carditem;