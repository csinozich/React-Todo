import React from 'react';

const TodoList = props => {
  return (
    <div className='list-items'>
      <p>{props.toDoItems.task}</p>
    </div>
  )
}

export default TodoList;
