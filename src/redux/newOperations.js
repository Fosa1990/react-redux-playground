import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./newTasksSlice";

// https://649177112f2c7ee6c2c8437e.mockapi.io/tasks

axios.defaults.baseURL = "https://649177112f2c7ee6c2c8437e.mockapi.io";

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/tasks");
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
