import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 12,
    loading: true,
  };

  componentDidMount() {
    this.setState({ counter: 42 });
  }

  increment = () => {
    if (this.state.loading === true) {
      this.setState({
        loading: false,
      });
      fetch('databaseConnection')
        .then((res) => res.json())
        .then((data) => {
          this.setState({ counter: data.accommodates });
          console.log(data);
        })
        .catch(console.log);
    } else {
      console.log('Connection has been disconected.');
    }
  };
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
