import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import MsgBox from "../components/MsgBox";
import DesktopIcon from "../components/DesktopIcon";
import bg from "../assets/windowsbg.jpeg";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { tabs } from "../utils/constants/tabs";
import { iconos } from "../utils/constants/iconos";

const Home = () => {
  const [log, setlog] = useState(localStorage.getItem("id") || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (log !== "") {
      navigate(`/${localStorage.getItem("id")}`);
    }
  }, [log, navigate]);

  const timeMsg = useSelector((state) => state.windows.timeMsg);
  const volumeMsg = useSelector((state) => state.windows.volume);
  const calendarMsg = useSelector((state) => state.windows.calendar);
  const registerWindow = useSelector((state) => state.windows.register);
  const loginWindow = useSelector((state) => state.windows.login);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="icon-flex">
        <DesktopIcon {...iconos[0]} />
        <DesktopIcon {...iconos[1]} />
      </div>
      {timeMsg && <MsgBox {...tabs[0]} />}
      {calendarMsg && <MsgBox {...tabs[1]} />}
      {volumeMsg && <MsgBox {...tabs[2]} />}
      {registerWindow && <RegisterForm />}
      {loginWindow && <LoginForm />}
      
    </div>
  );
};

export default Home;
