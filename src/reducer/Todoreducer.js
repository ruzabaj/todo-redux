const initialData = {
  todos: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
      case "ADD_TODO":
      // const { id, data } = action.payload;
      return {
          ...state,
          todos: [
              ...state.todos,
              action.payload
          ]
        };
    case "DELETE_TODO":
      // const newList = state.todoList.filter((i) => i.id !== action.id);
      return {
        ...state,
        // todoList: newList,
        todeos: [...state.todos.filter(todo=>todo.id !== action.payload)]
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};
export default reducer;
