import { nanoid } from "nanoid";
import { actionTypes } from "./constants";

export const addTask = text => {
  return {
    type: actionTypes.tasks.add,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: actionTypes.tasks.delete,
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: actionTypes.tasks.toogle,
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: actionTypes.filters.setStatus,
    payload: value,
  };
};
