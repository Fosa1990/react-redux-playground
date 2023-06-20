export const getTasks = state => state.toDos.tasks.items;
export const getIsLoading = state => state.toDos.tasks.isLoading;
export const getError = state => state.toDos.tasks.error;
export const getStatusFilter = state => state.toDos.filters.status;
