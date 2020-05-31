import React, { Component } from 'react';

export default class Nombre extends Component<{ name: string }> {
  render() {
    return (
      <div>
        <b>{this.props.name}</b>
      </div>
    );
  }
}
