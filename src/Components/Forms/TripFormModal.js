import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import TripForm from './TripForm';

export default function TripFormModal({ user, trips, setTrips }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Trip</ModalHeader>
        <ModalBody>
          <TripForm setTrips={setTrips} trips={trips} user={user} toggle={toggle}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

TripFormModal.propTypes = {
  trips: PropTypes.any,
  setTrips: PropTypes.func,
  user: PropTypes.any,
};
