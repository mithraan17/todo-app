// src/components/TodoItem.js

import React from 'react';

function TodoItem({ todo, index, deleteTodo }) {

  const handleCompleteClick = () => {
    deleteTodo(index);
  };


  return (
    <div className="todo-item">
      <span>{index + 1}. {todo}</span>
      <button onClick={handleCompleteClick}>Completed</button>
    </div>
  );
}

export default TodoItem;
