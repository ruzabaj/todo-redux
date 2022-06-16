import React from "react";
import { useState } from "react";
import "../sass/todo.scss";
import { addTodo, deleteTodo, removeTodo } from "../action";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {
  const [inputValue, setInputvalue] = useState("");
  const list = useSelector((state) => state.Todoreducer.dataList);
  const dispatch = useDispatch;
console.log({list})
  return (
    <div className="todo-outer">
      <div className="todo">
      <h3 className="heading"><a href='todo'>My Todo-s</a></h3>
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
            Add
          </button>
        </div>
        <div className='select-categories'>
                <div className='select-filter'>
                Filter:
                    <select>
                        <option>All</option>
                    </select>
                </div>
                <div className='select-sort'>
                Sort:
                    <select>
                        <option>Added Date</option>
                    </select>
                </div>
           </div>
        <div className="show-todo">
          {list?.map((i) => {
            return(

                <div className="items" key={i.id}>
              <h3>{i.data}</h3>
              <button
                type="submit"
                className="btn-add"
                onClick={() =>
                    dispatch(deleteTodo(i.id))
                }
                >
                Delete
              </button>
            </div>
              )
          })}
          </div>
      </div>
    </div>
  );
};

export default Todo;
