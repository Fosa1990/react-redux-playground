import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://649177112f2c7ee6c2c8437e.mockapi.io/tasks
axios.defaults.baseURL = "https://649177112f2c7ee6c2c8437e.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
