import React from 'react';
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';



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
