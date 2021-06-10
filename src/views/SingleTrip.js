import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSingleTrip } from '../helpers/data/tripData';
import { tripsAndLocations } from '../helpers/data/tripsLocationsData';
import ShowPressure from '../Components/Cards/PressureCard';

const TripLocationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
export default function SingleTripView({ user }) {
  const [tripLocations, setTripLocations] = useState([]);
  const [trips, setTrips] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    tripsAndLocations(id).then((response) => setTripLocations(response.locations));
    getSingleTrip(user.uid).then((response) => setTrips(response));
  }, []);

  return (
    <TripLocationContainer className="card-container align-content-center" id="single-trip">
      <h5>{trips.title}</h5>
      {tripLocations.map((location) => (
        <ShowPressure
          key={location.firebaseKey}
          locations={tripLocations}
          tripId={id}
          trips={trips}
          user={user}
          {...location}
        />
      ))};
    </TripLocationContainer>
  );
}

SingleTripView.propTypes = {
  user: PropTypes.any
};
