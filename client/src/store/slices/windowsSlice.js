import { createSlice } from "@reduxjs/toolkit";

export const windowsSlice = createSlice({
  name: "windows",
  initialState: {
    timeMsg: false,
    calendar: false,
    volume: false,
    register: false,
    login: false,
  },
  reducers: {
    timeMsg: (state) => {
      state.timeMsg = !state.timeMsg;
    },
    setCalendar: (state) => {
      state.calendar = !state.calendar;
    },
    setVolume: (state) => {
      state.volume = !state.volume;
    },
    registerSwitch: (state) => {
      state.register = !state.register;
    },
    loginSwitch: (state) => {
      state.login = !state.login;
    },
    goLogin: (state) => {
      state.register = false;
      state.login = true;
    },
    goRegister: (state) => {
      state.register = true;
      state.login = false;
    },
    logOff: () => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("id");
      localStorage.removeItem("username");
      window.location.replace('http://localhost:3000')
    },
  },
});

export const {
  timeMsg,
  setCalendar,
  setVolume,
  registerSwitch,
  loginSwitch,
  goLogin,
  goRegister,
  logOff,
} = windowsSlice.actions;

export default windowsSlice.reducer;
