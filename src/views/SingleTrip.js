import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchResultView from './SearchView';
import { getSingleTrip } from '../helpers/data/tripData';
import TripLocationCard from '../Components/Cards/TripLocationCard';
import { getTripLocation } from '../helpers/data/locationData';

const TripLocationContainer = styled.div`
  margin-left: 15%;
  padding-left: 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export default function SingleTripView() {
  const [tripLocations, setTripLocations] = useState([]);
  const [trip, setTrip] = useState({
    title: '',
  });
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTrip(firebaseKey).then(setTrip);
    getTripLocation(firebaseKey).then(setTripLocations);
  }, []);

  return (
    <div>
      <SearchResultView firebaseKey={firebaseKey} uid={trip.uid} setTripLocations={setTripLocations} className="card-container align-content-center"></SearchResultView>
        <TripLocationContainer>
          {tripLocations?.map((tripLocation) => (
            <TripLocationCard
              key={tripLocation.firebaseKey}
              tripLocation={tripLocation}
              setTripLocations={setTripLocations}
              trigger={tripLocation.trigger}
            />
          ))};
        </TripLocationContainer>
      </div>
  );
}
