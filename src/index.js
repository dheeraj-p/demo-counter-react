import React from 'react';
import ReactDOM from 'react-dom';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCounter() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <button onClick={this.increaseCounter.bind(this)}>
        {this.state.count}
      </button>
    );
  }
}

ReactDOM.render(<CounterButton />, document.getElementById('root'));
