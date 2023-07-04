import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TaskSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;
