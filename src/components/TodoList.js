// src/components/TodoList.js

import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (todos.length > 0) {
      setShowNotification(true);
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timeoutId); 
    }
  }, [todos]); 

  return (
    <div className="todo-list">
      {showNotification && (
        <div className="notification fade-in">
          Task Added!
        </div>
      )}

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
