import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/NavBar';
import ShoppingList from './components/List';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <ShoppingList></ShoppingList>
      <Counter></Counter>
    </div>
  );
}

export default App;
