import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import registerImg from "../assets/register.png";
import Draggable from "react-draggable";
import axios from "axios";
import { useDispatch } from "react-redux";
import { goLogin, registerSwitch } from "../store/slices/windowsSlice";
import { getLocal } from "../utils/helper/local";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/signup", {
        username: userName,
        email,
        password,
      });
      console.log(response);
      getLocal(response);
      navigate(`/${localStorage.getItem("id")}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Draggable bounds="parent" cancel=".activo" handle=".handle">
      <div className="register-wrapper">
        <div className="window">
          <div className="title-bar handle">
            <div className="title-bar-text">Welcome</div>
            <div className="title-bar-controls">
              <button
                className="activo"
                onClick={() => dispatch(registerSwitch())}
                aria-label="Close"
              ></button>
            </div>
          </div>
          <h2 style={{ textAlign: "center" }}>Register</h2>
          <div className="window-body register-box">
            <img src={registerImg} alt="world connection" />

            <form
              className="register-flex activo"
              onSubmit={(e) => handleSignUp(e)}
            >
              <div>
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <input
                  id="submit"
                  name="submit"
                  type="submit"
                  value="Register"
                />
                <span htmlFor="submit">
                  Already a member?{" "}
                  <span
                    className="link-swap"
                    onClick={() => dispatch(goLogin())}
                  >
                    Sign in.
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default RegisterForm;
