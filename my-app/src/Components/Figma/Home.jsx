import React from "react";
import "../../css/Home.scss";
import { useNavigate } from "react-router-dom";
import img from "../../Anh/imgfigma.png";
const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/SignIn')
  };
  return (
    <div className="Header">
      <div className="Header__top flex justify-between">
        <div className="Header__top-signin rounded-3xl" onClick={handleClick}>
          Sign In
        </div>
      </div>
      <div className="content">
        <div className="content__left">
          <h1 className="content-h1">Save your data storage here.</h1>
          <p className="content-p">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <div className="content-learnmore rounded-3xl">Learn more</div>
        </div>
        <img src={img} className="content__right content-img"></img>
      </div>
    </div>
  );
};

export default Banner;
