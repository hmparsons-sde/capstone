import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavBar from '../Components/Nav/Navbar';
import Routes from '../helpers/Routes';
import { getTrips } from '../helpers/data/tripData';
import { getLocation } from '../helpers/data/locationData';
// import { getLocation } from '../helpers/data/locationData';

function App() {
  const [user, setUser] = useState({});
  const [trips, setTrips] = useState([]);
  const [pressure, setPressure] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        getTrips(authed.uid).then((tripsArray) => setTrips(tripsArray));
        getLocation(authed.uid).then((locationsArray) => setLocations(locationsArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} setTrips={setTrips} />
        <Routes
          trips={trips}
          setTrips={setTrips}
          user={user}
          pressure={pressure}
          setPressure={setPressure}
          locations={locations}
          setLocations={setLocations}
        />
      </Router>
    </div>
  );
}

export default App;
