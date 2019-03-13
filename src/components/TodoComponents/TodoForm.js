import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
      name='todo'
      value={props.value}
      type='text'
      onChange={props.inputChangeHandler}
      placeholder='enter a task'
      />
      <button type='submit' onClick={props.addTask}>Add Task</button>
      <button onClick={props.removeItems}>Remove Completed</button>
    </form>
  )
}


export default TodoForm;
