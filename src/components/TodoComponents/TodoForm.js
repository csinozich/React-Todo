import React from 'react';

const toDoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class TodoForm extends React.Component {
  constructor () {
    super();

  }

  return (
    <div class='todo-form'>
      <h1>To-do List</h1>
      <form>
        <input
          name='list-item'
          value={this.state.task}
          onChange={this.itemSubmitHandler}
          />
        <button type='submit'>Add Item</button>
      </form>,
      <div className = 'class-list'>
        {this.state.toDoItem.map (todoItems => (
          <TodoForm toDoItems={toDoItems} key={toDoItems.toDoItem} />
        ))}
      </div>,
    </div>
  );
}


export default TodoForm;
