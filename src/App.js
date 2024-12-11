import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Try to get todos from localStorage on initial render
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    } 
  }, []);
  
  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      // Save non-empty todo list to localStorage
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      // If the todo list is empty, remove the 'todos' key from localStorage
      localStorage.removeItem('todos');
    }
  }, [todos]);
  

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>
        Todo List
        <i className="fa-solid fa-pen"></i> 
      </h1>
      
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
