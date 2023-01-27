import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    allNotes: [],
  },
  reducers: {
    getAllNotes: (state, payload) => {
      state.allNotes = payload.payload;
      console.log(state.allNotes);
    },
    addOneNote: (state, payload) => {
      state.allNotes = [...state.allNotes, payload];
      console.log(state.allNotes);
    },
  },
});

export const { getAllNotes, addOneNote } = noteSlice.actions;

export default noteSlice.reducer;
