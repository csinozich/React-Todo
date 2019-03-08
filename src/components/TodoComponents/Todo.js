import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <div
      key={props.todo.id}
      onClick={event => {
        props.toggleComplete(props.todo.id)
      }}>
      <p>{props.todo.task}</p>
    </div>
  );
}



export default Todo
