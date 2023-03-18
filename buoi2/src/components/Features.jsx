import React from 'react'
import {data} from './data'
import Carditem from "./Carditem"
import './Features.css';
const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <p>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="features-list">
        {
         data.map((item)=> {
            return(
              <Carditem
                content={item.content}
                src={item.src}
                ellipse={item.ellipse}
                rectangle={item.rectangle}
                title={item.title}
                vector={item.vector}
              >
              </Carditem>  
              )   
            }
          )
        }
      </div>
    </div>
  )
}

export default Features