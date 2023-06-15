export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  completed: "completed",
});

export const actionTypes = Object.freeze({
  tasks: {
    add: "tasks/addTask",
    delete: "tasks/deleteTask",
    toogle: "tasks/toggleCompleted ",
  },
  filters: {
    setStatus: "filters/setStatusFilter",
  },
});
