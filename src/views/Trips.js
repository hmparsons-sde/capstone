import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { getTrips } from '../helpers/data/tripData';
import TripCard from '../Components/Cards/TripCard';
import TripFormModal from '../Components/Forms/TripFormModal';

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const TripContainer = styled.div`  
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 0;
`;

export default function TripsView({ trips, setTrips, user }) {
  const [trip, setTrip] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    getTrips(user.uid).then((resp) => setTrip(resp));
  }, []);

  return (
    <div>
      <h1 className="justify-content-center text-center mt-3 mb-3">Trips</h1>
      <hr className="mt-3 w-50"/>
      {user
        && <CreateButton className="header mt-2">
      { !showModal
        ? <Button className="m-2 btn-lg justify-content-center" color='danger' onClick={handleClick} isOpen={modal} toggle={toggle} >Add Trip</Button>
        : <div>
          <Button className="m-2 btn-lg" color='secondary' onClick={handleClick}>Close</Button>
          </div>
      }
          </CreateButton>
      }
        <TripFormModal className="justify-content-center mt-3" setTrips={setTrips} trips={trips} user={user} isOpen={modal} toggle={toggle} />
        <TripContainer className='TripsContainer mt-2 p-1'>
          {trip.map((tripInfo) => (
            <TripCard
              key={tripInfo.firebaseKey}
              setTrips={setTrips}
              firebaseKey={tripInfo.firebaseKey}
              title={tripInfo.title}
              startDate={tripInfo.startDate}
              endDate={tripInfo.endDate}
              user={user}
            />
          ))}
        </TripContainer>
      </div>
  );
}

TripsView.propTypes = {
  trips: PropTypes.any,
  setTrips: PropTypes.func,
  user: PropTypes.any,
};
