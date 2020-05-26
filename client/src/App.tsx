import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/NavBar';
import ShoppingList from './components/List';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
