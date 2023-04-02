import React from 'react'
import anh1 from '../Anh/anh1.png'
import anh2 from '../Anh/anh2.png'
import hinhtron from '../Anh/hinhtron.png'
import './Selection.scss'
const Selection = () => {
    return (
        <div className='selection'>
            <div className='selection_box'>
                <div className='selection_box-top flex '>
                    <img src={anh1} className='Header__top-logo-img1 rounded-3xl selection_box-img1'></img>
                    <img src={anh2} className='Header__top-logo-img2 selection_box-img2'></img>
                    <label className='DataWarehourse'>DataWarehours</label>
                </div>
                <div className='selection_box-mid'>
                    <p className='selection_box-mid-top'>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
                </div>
                <div className='selection_box-mid'>
                    <p className='selection_box-mid-top'>info@warehouse.project 1-232-3434 (Main)</p>
                </div>
            </div>
            <div className='selection_box'>
                <label>About</label>
                <ul className='selection_box-img'>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">DW News</a></li>
                </ul>
            </div>
            <div className='selection_box'>
                <label>Help</label>
                <ul className='selection_box-img'>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Sign up</a></li>
                    <li><a href="#">Guide</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Q&A</a></li>
                </ul>
            </div>
            <div className='selection_box '>
                <label>Social Media</label>
                <div className='selection_box-img flex selection_box-image'>
                    <img src={hinhtron}></img>
                    <img src={hinhtron}></img>
                    <img src={hinhtron}></img>
                </div>
            </div>
        </div>
    )
}

export default Selection