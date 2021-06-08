import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase';
import NavBar from '../Components/Nav/Navbar';
// import PressureView from '../views/SearchView';
import Routes from '../helpers/Routes';

function App() {
  const [trips, setTrips] = useState([]);

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes
          trips={trips}
          setTrips={setTrips}
        />
      </Router>
    </div>
  );
}

export default App;
