import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { getTrips } from '../helpers/data/tripData';
import TripCard from '../Components/Cards/TripCard';
import TripForm from '../Components/Forms/TripForm';

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const TripContainer = styled.div`  
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 15%;
  margin-bottom: 0;
`;

export default function TripsView({ trips, setTrips, user }) {
  const [trip, setTrip] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTrips(user.uid).then((resp) => setTrip(resp));
  }, []);

  const closeIcon = (
    <svg fill="white" viewBox="0 0 20 20" width={58} height={28}>
      <path
        fillRule="oddeven"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div className="trips-view">
      <h1 className="justify-content-center text-center mt-3 mb-3">Trips</h1>
      <hr className="mt-3 w-50"/>
      {user
        && <CreateButton className="header mt-2">
          <Button className="m-2 btn-lg justify-content-center" color='info' onClick={onOpenModal} >Add Trip</Button>
        </CreateButton>
      }
        <br />
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          closeIcon={closeIcon}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
          <TripForm className="justify-content-center bg-white" setTrips={setTrips} trips={trips} user={user} onSubmit={onCloseModal}/>
        </Modal>
        <br />
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
              imageUrl={tripInfo.imageUrl}
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
