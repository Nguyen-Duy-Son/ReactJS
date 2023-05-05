import React from "react";
import { Link, NavLink ,Outlet} from "react-router-dom";
import '../../css/Nav.css';
const Nav = () => {
  //Điều hướng bằng Link trong react-router-dom
  const ListMenu = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    { id: 2, to: "/content", title: "content" },
    { id: 3, to: "/about", title: "about" },
  ];

  return (
    <div className="flex justify-around align-center nav">
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/content"}>Content</Link> */}
      {/*NavLink dungf được active */}
      {/* <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/content"}>Content</NavLink> */}
      
      {ListMenu.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
          >
            {item.title}
          </NavLink>
        );
      })}
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;
