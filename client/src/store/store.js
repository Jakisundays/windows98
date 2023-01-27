import { configureStore } from "@reduxjs/toolkit";
import windowsReducer from "./slices/windowsSlice";
import iconReducer from "./slices/iconSlice";
import noteReducer from "./slices/noteSlice";

export default configureStore({
  reducer: {
    windows: windowsReducer,
    icon: iconReducer,
    note: noteReducer,
  },
});
