import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import StartButton from './components/TimerComponents/StartButton';
import Timer from './components/TimerComponents/Timer';
import TimerInput from './components/TimerComponents/TimerInput'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
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
      todo: '',
      seconds: '00',
      minutes: '',
    }

    // secondsRemaining();
    // intervalHandler();
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
    };
    this.setState({todos: [...this.state.todos, newTask], todo: ''},
    )
  }

  toggleComplete = itemId => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos, todo: ''})
  }

  removeItems = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed;
        })
      };
    });
  };

  timerTick = () => {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - (min*60);
    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec<10) {
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }
    if (min<10) {
      this.setState({
        value: "0" + min,
      })
    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandler)
    }

    this.secondsRemaining--
  };

  startCountDown = () => {
    this.intervalHandler = setInterval(this.timerTick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time*60;
  };

  handleChange = event => {
    this.setState({
      minutes: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h2>to-do list</h2>
        <TimerInput minutes={this.state.minutes} handleChange = {this.handleChange}/>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <StartButton startCountDown={this.startCountDown}/>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/> {/*call this attribute anything*/}
        <TodoForm
        todos={this.state.todos} value={this.state.todo} addTask={this.addTask} inputChangeHandler={this.inputChangeHandler} removeItems={this.removeItems}/>
      </div>
    );
  }
}

export default App;
