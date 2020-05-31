import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/NavBar';
import Calendar from './components/dateInput';

function App() {
  return (
    <div className="gridMaster">
      <div className="NavBar">
        <AppNavbar></AppNavbar>
      </div>
      <div className="viewer">
        <h1 className="apodExplorerTitle">APOD Explorer</h1>
        <div className="inputDate">
          <label className="apodExplorerTitle">Select a date: </label>
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  );
}

export default App;
