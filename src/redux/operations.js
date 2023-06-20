import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://649177112f2c7ee6c2c8437e.mockapi.io/tasks
axios.defaults.baseURL = "https://649177112f2c7ee6c2c8437e.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/tasks");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/tasks", { text });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/tasks/${taskId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
