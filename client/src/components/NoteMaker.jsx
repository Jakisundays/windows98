import React, { useContext, useState } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import "../styles/NoteMaker.css";
import { useDispatch } from "react-redux";
import { closeNewNotes } from "../store/slices/iconSlice";
import { addOneNote } from "../store/slices/noteSlice";
import { notasContext } from "../pages/Logged";

const NoteMaker = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notas, setNotas] = useContext(notasContext);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/notes/${localStorage.getItem('username')}`,
        {
          title,
          message,
        },
        {
          headers: {
            Authorization: `BEAR ${localStorage.getItem("jwt")}`,
          },
        }
      );
      dispatch(closeNewNotes());
      dispatch(addOneNote(response.data));
      setNotas([...notas, response.data]);
      setMessage("");
      setMessage("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Draggable bounds="parent" handle=".handle" cancel=".activo">
      <div className="window nm-container">
        <div className="title-bar handle">
          <div className="title-bar-text">NoteMaker 📝</div>
          <div className="title-bar-controls activo">
            <button
              aria-label="Close"
              onClick={() => dispatch(closeNewNotes())}
            ></button>
          </div>
        </div>
        <div className="window-body">
          <form className="nm-form activo" onSubmit={(e) => handleSubmit(e)}>
            <div className="field-row">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                className="nm-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="field-row-stacked">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                className="nm-text"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input className="nm-submit" type="submit" value="Make note" />
          </form>
        </div>
      </div>
    </Draggable>
  );
};

export default NoteMaker;
