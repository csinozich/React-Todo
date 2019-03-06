import React from 'react';
import Todo from './Todo'

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo todo={todo}
        key={index}/> //creating new component out of each todo in the todos array
      ))}
    </div>
  )
}

export default TodoList;
