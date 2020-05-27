import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 12,
    loading: true,
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ counter: data.results[0].phone });
        console.log(data.results[0]);
      })
      .catch(console.log);
  }

  increment = () => {
    if (this.state.loading) {
      this.setState({
        counter: this.state.counter + 1,
      });
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

/*const logsData = await fetch('/jj');
const logsDataJson = await logsData.json();
console.log(logsDataJson);

*/
