let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  text: text,
  id: nextTodoId++,
  completed: false
});

export const setCurrentFilter = filter => ({
  type: "SET_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
