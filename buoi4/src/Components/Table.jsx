import React from 'react'
import Anh from '../Anh/Anh.png'
import './Table.scss'
const Table = () => {
  return (
    <div className='Table '>
      <div className='Table_box flex'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <div className='Table__content'>
          <h3>Testimonials</h3>
          <div className='content_box flex'>
            <i class="fa-solid fa-arrow-left"></i>
            <div className='box_content flex'>
              <div className='box_left'>
                <img src={Anh} alt='Anh John Fang'></img>
              </div>
              <div className='box_right'>
                <h4>John Fang</h4>
                <span>wordfaang.com</span>
                <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
              </div>
            </div> 
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Table