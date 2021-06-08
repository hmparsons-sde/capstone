import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from '../views/Home';
import NotFound from '../views/NotFound';
import PressureView from '../views/SearchView';
// import SingleTripView from '../views/SingleTrip';
import TripsView from '../views/Trips';

export default function Routes({
  pressure,
  setPressure,
  trips,
  setTrips
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={HomeView} />
        <Route
          path='/search'
          component={() => <PressureView
            setPressure={setPressure}
            pressure={pressure}
         />}
        />
        <Route
          path='/trips'
          component={() => <TripsView
            trips={trips}
            setTrips={setTrips}
          />} />
        <Route
          path='*'
          component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  pressure: PropTypes.any,
  setPressure: PropTypes.func,
  trips: PropTypes.any,
  setTrips: PropTypes.func
};
