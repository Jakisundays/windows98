import { createSlice } from "@reduxjs/toolkit";

export const iconSlice = createSlice({
  name: "icon",
  initialState: {
    notes: false,
    newNotes: false,
    help: false,
    error: false,
  },
  reducers: {
    openNotes: (state) => {
      state.notes = true;
    },
    closeNotes: (state) => {
      state.notes = false;
    },
    openNewNotes: (state) => {
      state.newNotes = true;
    },
    closeNewNotes: (state) => {
      state.newNotes = false;
    },
    helpPopUp: (state) => {
      state.help = !state.help;
    },
    errorPopUp: (state) => {
      state.error = !state.error;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openNotes,
  closeNotes,
  openNewNotes,
  closeNewNotes,
  helpPopUp,
  errorPopUp,
} = iconSlice.actions;

export default iconSlice.reducer;
