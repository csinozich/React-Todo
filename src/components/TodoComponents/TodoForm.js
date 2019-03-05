import React from 'react';

const TodoForm = props => {
  return (
    <div class='todo-form'>
      <h1>To-do List</h1>
      <form>
        <input
          name='list-item'
          value={this.state.toDoItem}
          onChange={this.itemSubmitHandler}
          />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
}


export default TodoForm;
