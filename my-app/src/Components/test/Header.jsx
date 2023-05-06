import React from "react";
import { Link, NavLink, Outlet, Route } from "react-router-dom";
import "../../css/Nav.css";
import { useNavigate} from "react-router-dom";
import '../../css/Header.scss'
const Header = () => {
  const navigate = useNavigate();
  const handliClick = () => {
    navigate('/form')
  };
  return (
    <div className="header" onClick={handliClick}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/content"}>Content</Link>
      {/*NavLink dungf được active */}
      {/* <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/content"}>Content</NavLink> */}
      {/* {ListMenu.map((item) => {
        return (
          <Link id={item.id} path={item.to}>
            {item.title}
          </Link>
        );
      })}
      <Outlet></Outlet> */}
      <button>Click</button>
    </div>
  );
};

export default Header;
