import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase';
import NavBar from '../Components/Nav/NavBar';
// import PressureView from '../views/SearchView';
import Routes from '../helpers/Routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
