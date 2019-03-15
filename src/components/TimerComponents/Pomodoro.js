import React from 'react';

class Pomodoro extends React.Component {


  render() {
    return(
      <div className='pomodoro'>
        <p className='timer'>{this.props.break ? this.props.restMinutes : this.props.workMinutes} : {this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</p>
        <div className='timer-buttons'>
          <button className='timerButton' onClick={this.props.start ? this.props.pauseTimer : this.props.startTimer}>{this.props.start ? 'Pause' : 'Start'}</button>
        </div>
      </div>
    )
  }
}

export default Pomodoro
