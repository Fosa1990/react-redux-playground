import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";
import { newTasksReducer } from "./newTasksSlice";

const combinedReducers = combineReducers({
  newTasks: newTasksReducer,
  tasks: tasksReducer,
  filters: filtersReducer,
});

const combinedReducersPersistConfig = {
  key: "react-redux-playground",
  storage,
};

export const rootPersistedReducer = combineReducers({
  toDos: persistReducer(combinedReducersPersistConfig, combinedReducers),
});
