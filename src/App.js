import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Pomodoro from './components/TimerComponents/Pomodoro'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
      minutes: 0,
      restMinutes: 5,
      workMinutes: 20,
      seconds: 0,
      break: false,
      start: false,
      interval: ''
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
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ""
    }
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

  timer = () => {
      this.setState({seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1})

      if (this.state.break) {
        this.setState({restMinutes: this.state.seconds === 0 ? this.state.restMinutes-1 : this.state.restMinutes === 5 ? 4 : this.state.restMinutes})
      }

      if (this.state.restMinutes === -1) {
        this.setState({restMinutes: 5, break: false})
      }
      else {
        this.setState({workMinutes: this.state.seconds === 0 ? this.state.workMinutes -1 : this.state.workMinutes === 20 ? 19 : this.state.workMinutes})

        if (this.state.workMinutes === -1) {
          this.setState({workMinutes: 20, break: true})
        }
      }
    }

    startTimer = () => {
      this.setState({interval: setInterval(this.timer, 1000), start: !this.state.start});
    }

    pauseTimer = () => {
      this.setState(prevState => {
      return {
        restMinutes: prevState.restMinutes,
        workMinutes: prevState.workMinutes,
        seconds: prevState.seconds,
        break: prevState.break,
        start: false,
        interval: clearInterval(prevState.interval)
      };
    })
    }

  // timer = () => {
  //     this.setState({seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1})
  //
  //     if (this.state.break) {
  //       this.setState({restMinutes: this.state.seconds === 0 ? this.state.restMinutes-1 : this.state.restMinutes === 5 ? 4 : this.state.restMinutes})
  //     }
  //
  //     if (this.state.restMinutes === -1) {
  //       this.setState({restMinutes: 5, break: false})
  //     }
  //     else {
  //       this.setState({workMinutes: this.state.seconds === 0 ? this.state.workMinutes -1 : this.state.workMinutes === 20 ? 19 : this.state.workMinutes})
  //
  //       if (this.state.workMinutes === -1) {
  //         this.setState({workMinutes: 20, break: true})
  //       }
  //   }
  // }
  //
  //   startTimer = () => {
  //     this.setState({start: !this.state.start});
  //     if (this.state.start === true) {
  //       this.setState({
  //         interval: setInterval(this.timer, 1000)
  //       })
  //     }
  //     else {
  //       this.setState({
  //         interval: clearInterval(this.timer)
  //       })
  //     }
  //   }

  render() {
    return (
      <div>
        <h2>to-do list</h2>
        <Pomodoro startTimer={this.startTimer} pauseTimer={this.pauseTimer} timer={this.timer} workMinutes={this.state.workMinutes} seconds={this.state.seconds} restMinutes={this.state.restMinutes} start={this.state.start}/>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/> {/*call this attribute anything*/}
        <TodoForm
        todos={this.state.todos} value={this.state.todo} addTask={this.addTask} inputChangeHandler={this.inputChangeHandler} removeItems={this.removeItems}/>
        <a className='collaboration' href='https://github.com/douglasjordan2'>made in collaboration with douglas jordan </a>
      </div>
    );
  }
}

export default App;
