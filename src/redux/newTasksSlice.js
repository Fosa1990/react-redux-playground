import { createSlice } from "@reduxjs/toolkit";
const newTasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newTasksSlice = createSlice({
  name: "tasks",
  initialState: newTasksInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  newTasksSlice.actions;
export const newTasksReducer = newTasksSlice.reducer;
