export const addTodo = (data) => ({
  type: "ADD_TODO",
  payload: {
    id: new Date().getTime().toString(),
    data: data,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});
