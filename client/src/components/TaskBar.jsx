import React, { useEffect, useState } from "react";
import volume from "../assets/audio.png";
import calendario from "../assets/calendario.png";
import headStart from "../assets/start.png";
import "../styles/TaskBar.css";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { setCalendar, setVolume, timeMsg } from "../store/slices/windowsSlice";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h5 onDoubleClick={() => dispatch(timeMsg())}>{time}</h5>;
};

const TaskBar = () => {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="taskbar" style={{ zIndex: "5000" }}>
        <button
          onClick={() => setStart(!start)}
          className="start-button toggle"
          title="Click here to begin."
        >
          <img src={headStart} alt="windows" />
          <b>Start</b>
        </button>
        <div className="taskbar-divider"></div>
        <div className="tasks"></div>
        <div className="taskbar-divider"></div>
        <div className="tray inset-shallow">
          <div className="tray-icons">
            <img
              className="tray-icon"
              alt="volume"
              src={volume}
              onClick={() => dispatch(setVolume())}
            />
            <img
              className="tray-icon"
              alt="calendar"
              src={calendario}
              onClick={() => dispatch(setCalendar())}
            />
          </div>
          <div className="taskbar-time">
            <Clock />
          </div>
        </div>
      </div>
      <Menu start={start} />
    </>
  );
};

export default TaskBar;
