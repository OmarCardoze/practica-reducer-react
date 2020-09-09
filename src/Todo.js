import React from 'react'
import {ACTIONS} from './actions/Actions'

export default function Todo({todo,dispatch}) {
    return (
        <div>
            <h3 style={{ color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</h3>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id}})}>Delete</button>
        </div>
    )
}
