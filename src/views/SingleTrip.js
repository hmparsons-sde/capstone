import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SingleTripBlock from '../Components/Cards/SingleTripBlock';
import SearchResultView from './SearchView';
import { getSingleTrip } from '../helpers/data/tripData';
import TripLocationCard from '../Components/Cards/TripLocationCard';
import { getTripLocation } from '../helpers/data/locationData';

const TripLocationContainer = styled.div`
  margin-left: 15%;
  margin-top: 5%;
  padding-left: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SearchContainer = styled.div`  
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-bottom: 5%;
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
    <SearchContainer>
      <SearchResultView firebaseKey={firebaseKey} uid={trip.uid} setTripLocations={setTripLocations} className="card-container align-content-center"></SearchResultView>
        <SingleTripBlock trip={trip}>
        </SingleTripBlock>
        <TripLocationContainer>
          {tripLocations?.map((tripLocation) => (
            <TripLocationCard
              key={tripLocation.firebaseKey}
              tripLocation={tripLocation}
              setTripLocations={setTripLocations}
            />
          ))};
        </TripLocationContainer>
      </SearchContainer>
  );
}
