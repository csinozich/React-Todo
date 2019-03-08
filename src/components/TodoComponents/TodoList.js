import React from 'react';
import Todo from './Todo'

const TodoList = props => {
  return (
    <div className='task-list'>
      {props.todos.map((todo, id) => (
        <Todo todo={todo}
        key={id}
        toggleComplete={props.toggleComplete}/> //creating new component out of each todo in the todos array
      ))}
    </div>
  )
}

export default TodoList;
