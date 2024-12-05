// src/components/TodoList.js

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available. Add some!</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
