import React from "react";
import "/Users/jacobdominguez/Documents/codiyapa/MERN/Mern Auth/client/src/styles/Folder.css";
import { MdOutlineExpandMore } from "react-icons/md";
import folder from "../assets/folder.png";
import Draggable from "react-draggable";
import AddressPage from "./AddressPage";
import { useDispatch } from "react-redux";
import { ayudaIcons } from "../utils/constants/ayudaIcons";
import { closeNotes } from "../store/slices/iconSlice";


const Folder = () => {
  const dispatch = useDispatch();

  return (
    <Draggable bounds="parent" cancel=".activo">
      <div className="window folder-container">
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button aria-label="Close" className="activo" onClick={() => dispatch(closeNotes())} ></button>
          </div>
        </div>
        <div className="toolbars activo">
          <div className="toolbar activo" id="menu-bar-toolbar">
            <div className="menus activo" role="menubar" aria-label="Application Menu">
              <div className="spacer" />
              <button className="menu-button file-menu-button">
                <span className="menu-hotkey">F</span>ile
              </button>
              <button className="menu-button file-menu-button">
                <span className="menu-hotkey">E</span>dit
              </button>
              {ayudaIcons.map((icono, i) => (
                <HelpIcons key={i} {...icono} />
              ))}
            </div>
          </div>
          <AddressBar />
        </div>
        <div className="window-body display-notes activo">
          <AddressPage />
        </div>
      </div>
    </Draggable>
  );
};

const HelpIcons = ({ icon, title, disable, uso }) => {
  const dispatch = useDispatch();
  return (
    <button
      disabled={disable}
      className="help-icon no-border activo"
      onClick={() => dispatch(uso())}
    >
      <img src={icon} alt="icon" />
      <span> {title} </span>
    </button>
  );
};

const AddressBar = () => {
  return (
    <div className="address-container">
      <div className="spacer" />
      <p>Address</p>
      <div className="address-url">
        <img alt="folder" src={folder} />
        <p>My notes</p>
        <MdOutlineExpandMore className="address-expand" />
      </div>
    </div>
  );
};

export default Folder;
