// src/components/TodoForm.js

import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [error,setError] = useState('');
  const minLength = 10;
  const maxLength = 50; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (input.trim() === '') {
      setError('Please enter a todo item');
    } else if (input.length > maxLength) {
      setError(`Todo item cannot exceed ${maxLength} characters`);
    }else if (input.length < minLength) {
      setError(`Todo item cannot be less than ${minLength} characters`);
    } else {
      addTodo(input);
      setInput('');
      setError('');
    }
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
   
    {error && <p style={{ color: 'red', fontSize: '15px' }}>{error}</p>}
    
    </div>
  );
}

export default TodoForm;
