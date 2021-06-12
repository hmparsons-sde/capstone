import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTripBlock from '../Components/Cards/SingleTripBlock';
import { getSingleTrip } from '../helpers/data/tripData';

export default function SingleTripView() {
  const [trip, setTrip] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTrip(firebaseKey).then(setTrip);
  }, []);

  return (
    <div>
      <SingleTripBlock trip={trip}>
        <h2>{trip.title}</h2>
      </SingleTripBlock>
    </div>
  );
}

// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { getSingleTrip } from '../helpers/data/tripData';
// // import { tripsAndLocations } from '../helpers/data/tripsLocationsData';
// import ShowPressure from '../Components/Cards/PressureCard';

// const TripLocationContainer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   margin-top: 5%;
// `;
// export default function SingleTripView({ user }) {
//   // const [tripLocations, setTripLocations] = useState([]);
//   const [trips, setTrips] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     // tripsAndLocations(id).then((response) => setTripLocations(response.locations));
//     getSingleTrip(id).then((response) => setTrips(response));
//   }, []);

//   return (
//     <TripLocationContainer className="card-container align-content-center" id="single-trip">
//       <h5>{trips.title}</h5>
//       {trips.map((trip) => (
//         <ShowPressure
//           key={trip.firebaseKey}
//           tripId={id}
//           trips={trips}
//           user={user}
//           {...trip}
//         />
//       ))};
//     </TripLocationContainer>
//   );
// }

// SingleTripView.propTypes = {
//   user: PropTypes.any
// };
