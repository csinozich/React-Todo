import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <div
      key={props.todo.id}
      onClick={event => {
        props.toggleComplete(props.todo.id)
      }}
      className={`todo ${props.todo.completed}`}>
      <p>{props.todo.task}</p>
    </div>
  );
}

// if props.todo.completed {
//   return (
//      <CompletedTask />
//   )
// }

export default Todo
