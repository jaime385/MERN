import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/NavBar';
import Calendar from './components/dateInput';
//import DataButton from './components/dataButton';

function App() {
  return (
    <div className="gridMaster">
      <div className="NavBar">
        <AppNavbar></AppNavbar>
      </div>
      <div className="viewer" id="viewer">
        <div className="inputDate">
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  );
}

export default App;
