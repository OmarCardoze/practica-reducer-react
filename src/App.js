import React, { useReducer, useState } from 'react';
import Todo from './Todo'
import {ACTIONS} from './actions/Actions'
import './App.css';

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={name}
          onChange={e => setName(e.target.value)}
        />
      </form>

      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;

