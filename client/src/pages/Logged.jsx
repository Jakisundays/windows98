import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bg from "../assets/windowsbg.jpeg";
import DesktopIcon from "../components/DesktopIcon";
import Folder from "../components/Folder";
import MsgBox from "../components/MsgBox";
import NoteMaker from "../components/NoteMaker";
import { getAllNotes } from "../store/slices/noteSlice";
import "../styles/Home.css";
import { logged } from "../utils/constants/logged";
import { tabs } from "../utils/constants/tabs";
import { URL } from "../utils/constants/urls";

export const notasContext = createContext();

const Logged = () => {
  const dispatch = useDispatch();
  const [notas, setNotas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get(
          `${URL}/notes/allnotes/${localStorage.getItem("username")}`,
          {
            headers: {
              Authorization: `BEAR ${localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log({ response: response.data.userNotes });
        dispatch(getAllNotes(response.data.userNotes));
        setNotas(response.data.userNotes);
      } catch (error) {
        console.error({ error });
      }
    };
    getNotes();
  }, [dispatch]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate("/");
    }
  }, [navigate]);

  const timeMsg = useSelector((state) => state.windows.timeMsg);
  const volumeMsg = useSelector((state) => state.windows.volume);
  const calendarMsg = useSelector((state) => state.windows.calendar);
  const myNotes = useSelector((state) => state.icon.notes);
  const newNotesMenu = useSelector((state) => state.icon.newNotes);
  const helpMsg = useSelector((state) => state.icon.help);
  const notSupported = useSelector((state) => state.icon.error);
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="icon-flex">
        <DesktopIcon {...logged[1]} />
      </div>
      {timeMsg && <MsgBox {...tabs[0]} />}
      {calendarMsg && <MsgBox {...tabs[1]} />}
      {volumeMsg && <MsgBox {...tabs[2]} />}
      <notasContext.Provider value={[notas, setNotas]}>
        {myNotes && <Folder />}
        {newNotesMenu && <NoteMaker />}
      </notasContext.Provider>
      {helpMsg && <MsgBox {...tabs[3]} />}
      {notSupported && <MsgBox {...tabs[4]} />}
    </div>
  );
};

export default Logged;
