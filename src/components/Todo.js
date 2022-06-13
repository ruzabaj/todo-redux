import React from "react";
import { useState } from "react";
import "../sass/todo.scss";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo , removeTodo } from "../action";
const Todo = () => {
    const [inputValue , setInputvalue] = useState('');
    const dispatch=useDispatch;

  return (
    <div className="todo-outer">
    <div className="todo">
      <div className="heading">My Todo-s</div>
      <div className="input-todo">
        <input type="text" onChange={e=>setInputvalue(e.target.value)} value={inputValue}/>
        <button type="submit" className="btn-add" onClick={()=>dispatch()}>Add</button>
      </div>
    </div>
    </div>
  );
};

export default Todo;
