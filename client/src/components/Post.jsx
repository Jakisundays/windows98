import React from "react";
import bg from "../assets/windowsbg.jpeg";
import "../styles/Post.css";
import { MdOutlineThumbUpAlt, MdOutlineThumbDownAlt } from "react-icons/md";

const Post = () => {
  return (
    <div className="window post-container">
      <div className="title-bar">
        <div className="title-bar-text"> User </div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body post-body">
        <h4>Title</h4>
        <img src={bg} alt="Windows 98" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          aut at repudiandae.
        </p>
        <span className="post-date">31/5/1999</span>
        <div className="status-bar likes">
          <div>
            <MdOutlineThumbUpAlt />
            <span>300</span>
          </div>
          <div>
            <MdOutlineThumbDownAlt />
            <span>20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
