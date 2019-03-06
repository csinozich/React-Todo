import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      todo: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }
    this.setState({todos: [...this.state.todos]})
  }

  // toggleComplete() {
  //
  // }
  //
  // removeItems() {
  //
  // }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/> {/*call this attribute anything*/}
        <TodoForm value={this.state.todo} addTask={this.addTask} inputChangeHandler={this.inputChangeHandler}/>
      </div>
    );
  }
}

export default App;
