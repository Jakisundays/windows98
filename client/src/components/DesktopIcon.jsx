import React from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import "../styles/DesktopIcon.css";

const DesktopIcon = ({ title, icon, funcion }) => {
  const dispatch = useDispatch();
  return (
    <Draggable handle=".handle" bounds="parent" cancel=".activo">
      <div className="desktop-icon shortcut handle">
        <img
          className="activo"
          alt="icon"
          src={icon}
          onClick={() => dispatch(funcion())}
        />
        <h6> {title} </h6>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
