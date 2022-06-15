import React from "react";
import { useState } from "react";
import "../sass/todo.scss";
import { addTodo, deleteTodo, removeTodo } from "../action";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {
  const [inputValue, setInputvalue] = useState("");
  const List = useSelector((state) => state.todoReducer.dataList);
  const dispatch = useDispatch;

  return (
    <div className="todo-outer">
      <div className="todo">
        <div className="heading">My Todo-s</div>

        <div className="input-todo">
          <input
            type="text"
            onChange={(e) => setInputvalue(e.target.value)}
            value={inputValue}
          />
          <button
            type="submit"
            className="btn-add"
            onClick={() => dispatch(addTodo(inputValue), setInputvalue(""))}
          >
            Delete
          </button>
        </div>
        <div className="show-todo">
          {List.map((i) => {
            <div className="items" key={i.id}>
              <h3>{i.data}</h3>
              <button
                type="submit"
                className="btn-add"
                onClick={() =>
                  dispatch(deleteTodo(i.id))
                }
              >
                Add
              </button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
