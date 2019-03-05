import React from 'react';
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItem: '',
      id: '',
      completed: false,
    }
  }

  itemSubmitHandler = event => {
    let newItem = {
      toDoItem: this.state.toDoItem,
      id: Date.now(),
      completed: this.state.completed
    }
    this.setState({toDoItem: [...this.state.toDoItem, newItem] });
  };

  itemClearHandler = event => {

  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todo
