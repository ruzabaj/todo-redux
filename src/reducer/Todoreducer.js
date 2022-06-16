const initialData = {
  todoList: [],
};
const Todoreducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id,
            data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.todoList.filter((i) => i.id !== action.id);
      return {
        ...state,
        todoList: newList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: [],
      };
    default:
      return state;
  }
};
export default Todoreducer;
