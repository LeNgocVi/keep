import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import trashReducer from "./trashSlice";
import userReducer from "./userSlice";
import filterReducer from "./filterSlice";

const rootReducer = {
  note: noteReducer,
  trash: trashReducer,
  user: userReducer,
  filter: filterReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
