import React, { useContext, useState } from "react";
import folderImg from "../assets/folder.png";
import noteIcon from "../assets/noteIcon.png";
import "../styles/AddressPage.css";
import { notasContext } from "../pages/Logged";
import axios from "axios";
import { URL } from "../utils/constants/urls";

const AddressPage = () => {
  const [notas] = useContext(notasContext);

  return (
    <div className="address-page-container">
      <div className="address-folder-description">
        <img src={folderImg} alt="folder" />
        <h3> My notes </h3>
      </div>
      <div className="address-note-wrapper">
        {notas.map((nota, i) => (
          <NoteIcon {...nota} key={i} />
        ))}
      </div>
    </div>
  );
};

const NoteIcon = ({ title, message, _id }) => {
  const [expand, setExpand] = useState(false);
  const [msg, setMsg] = useState(message);
  const [notas, setNotas] = useContext(notasContext);

  const patchNote = async () => {
    try {
      await axios.patch(
        `${URL}/notes/${_id}`,
        {
          message: msg,
        },
        {
          headers: {
            Authorization: `BEAR ${localStorage.getItem("jwt")}`,
          },
        }
      );
      setExpand(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteNote = async () => {
    try {
      await axios.delete(`${URL}/notes/${_id}`, {
        headers: {
          Authorization: `BEAR ${localStorage.getItem("jwt")}`,
        },
      });

      setNotas((beforeNotes) => beforeNotes.filter((data) => data._id !== _id))
      console.log(notas);
      setExpand(false);
      // let list = notas.slice();
      // list.filter((data) => data._id == _id);
    } catch (error) {
      console.log(error.message);
    }
  };

  // let list = notas.slice();
  // list.filter((data) => data._id == _id);
  // console.log({list});
  

  return (
    <div className="handle icon-note">
      <img
        className="activo"
        alt="icon"
        src={noteIcon}
        onClick={() => setExpand(true)}
      />
      <p> {title || "note"} </p>
      {expand && (
        <div className="window expand-icon">
          <div className="title-bar">
            <div className="title-bar-text"> {title} </div>
            <div className="title-bar-controls">
              <button
                className="activo"
                aria-label="Close"
                onClick={() => setExpand(false)}
              ></button>
            </div>
          </div>
          <div
            className="window-body activo"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              height: "75%",
            }}
          >
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              style={{ height: "75%", resize: "none" }}
            ></textarea>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button onClick={() => patchNote()}>
                edit
              </button>
              <button onClick={() => deleteNote()}>delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressPage;
