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
    <i className="fas fa-times fa-2x mr-3"></i>
  );

  return (
    <div className="trips-view">
      {user
        && <CreateButton className="header mt-2">
          <Button className="m-2 btn-lg justify-content-center" color='secondary' onClick={onOpenModal} >add trip</Button>
        </CreateButton>
      }
        <br />
        <Modal
          id="tripModal"
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
