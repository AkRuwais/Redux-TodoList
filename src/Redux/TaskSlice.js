import { createSlice, current } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      //   console.log(action.payload);
    },
    editTask: (state, action) => {
      const data = state.tasks.find((e) => e.id == action.payload.id);
      data.text = action.payload.text;
    },
    deleteTask: (state, action) => {
      // console.log(current(state));
      const remove = current(state.tasks).filter(
        (element) => element.id !== action.payload
      );
      state.tasks = remove;
    },
  },
});

export const { addTask, editTask, deleteTask } = TodoSlice.actions;
export default TodoSlice.reducer;
