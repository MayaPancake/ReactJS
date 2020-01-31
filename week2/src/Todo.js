import React, { useState } from 'react';
import './App.css';
import 'react-dom';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
      className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}><img src="https://img.icons8.com/android/15/000000/checked.png" /></button>
        <button onClick={() => removeTodo(index)}><img src="https://img.icons8.com/ultraviolet/15/000000/xbox-x.png" /></button>
      </div>
   </div>
 )
}

export default Todo;