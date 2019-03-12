import React from 'react';

class TimerInput extends React.Component {
  render() {
    return (
      <div className='timer-input'>
        <h3>Input your desired time</h3>
        <input type='number' minutes={this.props.minutes} onChange={() => this.props.handleChange} required />
      </div>
    );
  }
}

export default TimerInput
