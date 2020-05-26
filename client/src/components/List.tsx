import React from 'react';
//import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends React.Component {
  state = {
    items: [
      { id: uuidv4(), name: 'eggs' },
      { id: uuidv4(), name: 'apples' },
      { id: uuidv4(), name: 'milk' },
      { id: uuidv4(), name: 'steak' },
    ],
  };
  render() {
    return <p>{this.state.items[0].id}</p>;
  }
}

export default ShoppingList;
