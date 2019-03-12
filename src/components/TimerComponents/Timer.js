import React from 'react';
import './timer.css'

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 className='timer'>{this.props.minutes}:{this.props.seconds}</h1>
      </div>
    );
  }
}

export default Timer
