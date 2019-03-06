import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <p>{props.todo.task}</p>
  )
}



export default Todo
