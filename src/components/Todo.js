import React from "react";
import { useState } from "react";
import "../sass/todo.scss";
import { addTodo, deleteTodo , removeTodo } from "../action";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {
    const [inputValue , setInputvalue] = useState('');
    const dispatch=useDispatch;

  return (
    <div className="todo-outer">
    <div className="todo">
      <div className="heading">My Todo-s</div>

      <div className="input-todo">
        <input type="text" onChange={e=>setInputvalue(e.target.value)} value={inputValue}/>
        <button type="submit" className="btn-add" onClick={()=>dispatch(addTodo(inputValue), setInputvalue(''))}>Delete</button>
      </div>
      <div className="show-todo">
        <div className="items">
        <input type="text" onChange={e=>setInputvalue(e.target.value)} value={inputValue}/>
        <button type="submit" className="btn-add" onClick={()=>dispatch(deleteTodo(inputValue), setInputvalue(''))}>Add</button> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Todo;
