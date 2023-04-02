import React from 'react';
import './Carditem.scss';
const Carditem = (props) => {
  return (
    <div className="card_item flex">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <img src={props.rectangle} alt="" className='img_rectangle'></img>
      <div className="item_box flex">
        <img src={props.src} alt="" className='img_src'></img>
        <div className="item_box-right flex flex-col">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <div className="item_box--finish flex">
            <p>Learn more</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        
      </div>   
    </div>
  )
}

export default Carditem;