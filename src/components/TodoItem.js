// src/components/TodoItem.js

import React from 'react';

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div className="todo-item">
      <span>{index + 1}. {todo}</span>
      <button onClick={() => deleteTodo(index)}>Completed</button>
    </div>
  );
}

export default TodoItem;
