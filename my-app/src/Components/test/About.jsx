import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const handliClick = ()=>{
        navigate("/")
    }
  return (
    <div onClick={handliClick}>
      <button>click</button>
    </div>
  );
}

export default About