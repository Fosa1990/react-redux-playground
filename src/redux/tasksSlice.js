import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledFetchTasks = (state, action) => {
  state.items = action.payload;
};
const handleFulfilledAddTask = (state, action) => {
  state.items.push(action.payload);
};
const handleFulfilledDeleteTask = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload);
  state.items.splice(index, 1);
};
const handleFulfilledToggleCompleted = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.fulfilled, handleFulfilledFetchTasks)
      .addCase(addTask.fulfilled, handleFulfilledAddTask)
      .addCase(deleteTask.fulfilled, handleFulfilledDeleteTask)
      .addCase(toggleCompleted.fulfilled, handleFulfilledToggleCompleted)
      .addMatcher(
        isAnyOf(
          fetchTasks.pending,
          addTask.pending,
          deleteTask.pending,
          toggleCompleted.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchTasks.rejected,
          addTask.rejected,
          deleteTask.rejected,
          toggleCompleted.rejected
        ),
        handleRejected
      )

      .addMatcher(
        isAnyOf(
          fetchTasks.fulfilled,
          addTask.fulfilled,
          deleteTask.fulfilled,
          toggleCompleted.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
