// import { errorPopUp, helpPopUp, openNewNotes } from "../store/slices/iconSlice";

import { errorPopUp, helpPopUp, openNewNotes } from "../../store/slices/iconSlice";

export const ayudaIcons = [
  {
    icon: require("../../assets/new_note.png"),
    title: "New note",
    disable: false,
    uso: () => openNewNotes(),
  },
  {
    icon: require("../../assets/help_book.png"),
    title: "Help",
    disable: false,
    uso: () => helpPopUp(),
  },
  {
    icon: require("../../assets/fix.png"),
    title: "Fix",
    disable: true,
    uso: null,
  },
  {
    icon: require("../../assets/search.png"),
    title: "Search",
    disable: false,
    uso: () => errorPopUp(),
  },
];
