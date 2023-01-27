import { openNotes } from "../../store/slices/iconSlice";
import { logOff } from "../../store/slices/windowsSlice";

export const logged = [
  {
    title: "Log Off",
    icon: require("../../assets/logOff.png"),
    funcion: () => logOff(),
  },
  {
    title: "Notes",
    icon: require("/Users/jacobdominguez/Documents/codiyapa/MERN/Mern Auth/client/src/assets/note.png"),
    funcion: () => openNotes(),
  },
];
