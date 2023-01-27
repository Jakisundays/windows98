import React from "react";
import "../styles/MsgBox.css";
import infoIcon from "../assets/info.png";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";

const MsgBox = ({ title, funcion }) => {
  const dispatch = useDispatch();
  return (
    <Draggable
      bounds="parent"
      cancel=".activo"
      // defaultPosition={{ x: 30, y: 50 }}
    >
      <div style={{ width: 300 }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Windows</div>
          <div className="title-bar-controls">
            <button
              className="activo"
              aria-label="Close"
              onClick={() => dispatch(funcion())}
            />
          </div>
        </div>

        <div className="window-body window-display">
          <div className="text-pic">
            <img src={infoIcon} alt="info" width={"32"} height={"32"} />
            <div className="text-info">{title}</div>
          </div>
          <button
            className="activo"
            onClick={() => dispatch(funcion())}
            style={{ alignSelf: "center" }}
          >
            ok
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default MsgBox;
