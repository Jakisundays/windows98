import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("usertag") || "");

  useEffect(() => {
    const usertag = localStorage.getItem("usertag");
    if (usertag !== user) {
      setUser(usertag);
      // navigate("/", { replace: true }); // This will reload the current page
    }
  }, [user, navigate]);

  return (
    <nav className="title-bar">
      <Link className="title-bar-text" to="/">
        <h4>Goals</h4>
      </Link>
      {user ? (
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      ) : (
        <Link to="/login">
          <button className="sign-in">sign in</button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
