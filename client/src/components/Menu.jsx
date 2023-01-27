import React, { useState } from "react";
import "../styles/Menu.css";
import { useDispatch } from "react-redux";
import { iconos } from "../utils/constants/iconos";
import { useEffect } from "react";
import { logged } from "../utils/constants/logged";

const MenuItem = ({ title, icon, funcion }) => {
  const dispatch = useDispatch();
  return (
    <div className="menu-item" onClick={() => dispatch(funcion())}>
      <img src={icon} alt="icon" />
      <h5> {title} </h5>
    </div>
  );
};

const Menu = ({ start }) => {
  const [allItems, setallItems] = useState();
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    if (token) {
      setallItems(logged);
    } else {
      setallItems(iconos);
    }
  }, [token]);

  return (
    <div style={{ display: start ? "block" : "none" }} className="start-menu">
      <div className="system-name">
        <div className="text-name">
          &nbsp; <b>Windows</b>98
        </div>
      </div>
      <div className="menu-options">
        {allItems?.map((info,i) => (
          <MenuItem {...info} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
