import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from '../views/Home';
import NotFound from '../views/NotFound';
import TripsView from '../views/Trips';
import SingleTripView from '../views/SingleTrip';
import ForecastView from '../views/ForecastView';
import SingleForecastView from '../views/SingleForecastView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({
  user,
  pressure,
  setPressure,
  trips,
  setTrips,
  setLocations,
  locations,
  cityName
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={HomeView}
        />
        <Route
          exact
          path='/forecast'
          component={ForecastView}
        />
        <Route
          exact
          path='/trips'
          user={user}
          component={() => <TripsView
            trips={trips}
            setTrips={setTrips}
            user={user}
          />}
        />
        <PrivateRoute
          exact
          path='/trips/:firebaseKey'
          user={user}
          component={() => <SingleTripView
            setPressure={setPressure}
            pressure={pressure}
            locations={locations}
            setLocations={setLocations}
            user={user}
            />}
        />
        <PrivateRoute
          exact
          path='/trips/:firebaseKey/:cityName'
          user={user}
          cityName={cityName}
          component={SingleForecastView}
        />
        <Route
          path='*'
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  pressure: PropTypes.any,
  setPressure: PropTypes.func,
  trips: PropTypes.any,
  setTrips: PropTypes.func,
  locations: PropTypes.any,
  setLocations: PropTypes.func,
  cityName: PropTypes.string
};
