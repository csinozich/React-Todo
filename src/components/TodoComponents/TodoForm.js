import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
      name='todo'
      value={props.value}
      type='text'
      onChange={props.inputChangeHandler}
      placeholder='enter a task'/>
      <button onClick={this.addTask}>Add Task</button>
      <button onClick={this.removeItems}>Remove Items</button>
    </form>
  )
}


export default TodoForm;
