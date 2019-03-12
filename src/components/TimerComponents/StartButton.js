import React from 'react';

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startCountDown}>Start</button>
      </div>
    );
  }
}

export default StartButton;
