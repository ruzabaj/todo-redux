import React from "react";
import { useState } from "react";
import "../sass/todo.scss";

const Todo = () => {
    const [inputValue , setInputvalue] = useState('');
    const inputText =()=>{
        
    }
  return (
    <div className="todo-outer">
    <div className="todo">
      <div className="heading">My Todo-s</div>
      <div className="input-todo">
        <input type="text" onChange="inputText"  value={inputValue}/>
        <button type="submit" className="btn-add" >Add</button>
      </div>
    </div>
    </div>
  );
};

export default Todo;
