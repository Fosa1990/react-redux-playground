import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { actionTypes } from "./constants";

export const addTask = createAction(actionTypes.tasks.add, text => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTask = createAction(actionTypes.tasks.delete);

export const toggleCompleted = createAction(actionTypes.tasks.toggle);

export const setStatusFilter = createAction(actionTypes.filters.setStatus);
