import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./newOperations";

const newTasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newTasksSlice = createSlice({
  name: "tasks",
  initialState: newTasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state, _) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const newTasksReducer = newTasksSlice.reducer;
