import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/loginImg.jpeg";
import Draggable from "react-draggable";
import axios from "axios";
import { useDispatch } from "react-redux";
import { goRegister, loginSwitch } from "../store/slices/windowsSlice";
import { getLocal } from "../utils/helper/local";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        username,
        password,
      });
      getLocal(response);
      navigate(`/${localStorage.getItem("id")}`);
    } catch (error) {
      console.log("user not found");
    }
  };

  return (
    <Draggable bounds="parent" handle=".handle" cancel=".activo">
      <div className="login-wrapper">
        <div className="window">
          <div className="title-bar handle">
            <div className="title-bar-text">Welcome back...</div>
            <div className="title-bar-controls">
              <button
                className="activo"
                onClick={() => dispatch(loginSwitch())}
                aria-label="Close"
              ></button>
            </div>
          </div>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <div className="window-body register-box">
            <form
              className="register-flex activo"
              onSubmit={(e) => handleLogin(e)}
            >
              <div>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <input id="submit" className="activo" name="submit" type="submit" value="Login" />
                <span htmlFor="submit">
                  Not a member?{" "}
                  <span className="link-swap" onClick={() => dispatch(goRegister())}>Sign up.</span>{" "}
                </span>
              </div>
            </form>
            <img src={loginImg} alt="world connection" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default LoginForm;
