import { errorPopUp, helpPopUp } from "../../store/slices/iconSlice";
import { setCalendar, setVolume, timeMsg } from "../../store/slices/windowsSlice";

export const tabs = [
    {
      title: "Get a watch",
      funcion: () => timeMsg(),
    },
    {
      title: "The purpose of our lives is to be happy.",
      funcion: () => setCalendar(),
    },
    {
      title: "Increasing the volume does not improve the quality of a bad song.",
      funcion: () => setVolume(),
    },
    {
      title: "get help advice",
      funcion: () => helpPopUp(),
    },
    {
      title: "not supported",
      funcion: () => errorPopUp(),
    },
  ];