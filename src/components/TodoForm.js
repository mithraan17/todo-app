// src/components/TodoForm.js

import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
      setError('');
    }
    else{
      setError("Please enter a todo item");

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
