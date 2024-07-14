'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/todos');
      setTodos(response.data);
    } catch (error) {
      setError('Error fetching todos');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title || !desc) {
        setError('Title and description are required');
        return;
      }
      const response = await axios.post('http://localhost:3001/api/todos', { title, desc });
      setTodos([...todos, response.data]);
      setTitle('');
      setDesc('');
      setError(null);
    } catch (error) {
      setError('Error adding todo');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      setError('Error deleting todo');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Todo App</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Todo
        </button>
      </form>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo._id} className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{todo.title}</h2>
              <p className="text-gray-600">{todo.desc}</p>
            </div>
            <button
              onClick={() => handleDelete(todo._id)}
              className="bg-red-600 text-white py-1 px-3 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
