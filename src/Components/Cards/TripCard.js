import React, { useState } from 'react';
import {
  Button, Card, CardText, CardTitle
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';
import { deleteTrip } from '../../helpers/data/tripData';
import TripForm from '../Forms/TripForm';

const TripItem = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  box-shadow: 50px;
`;

const TripCard = ({
  firebaseKey,
  user,
  title,
  startDate,
  endDate,
  setTrips,
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTrip(firebaseKey, user.uid).then((tripsArray) => setTrips(tripsArray));
        break;
      case 'edit':
        setOpen((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/trips/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <TripItem className='col-auto'>
      <Card key={firebaseKey} body>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>
          {startDate} - {endDate}
        </CardText>
        <Button color="warning" onClick={() => handleClick('view')}>
          View Trip
        </Button>
        <Button
          color="danger"
          onClick={() => {
            handleClick('delete');
          }}
        >
          Delete Trip
        </Button>
        <Button
          color="info"
          onClick={() => {
            handleClick('edit');
          }}
        >
          {onOpenModal ? 'Edit Trip' : ''}
        </Button>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
          >
          <TripForm
            formTitle="Edit Trip"
            setTrips={setTrips}
            firebaseKey={firebaseKey}
            title={title}
            startDate={startDate}
            endDate={endDate}
            user={user}
          />
        </Modal>
      </Card>
    </TripItem>
  );
};
console.warn('click');

TripCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  title: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  setTrips: PropTypes.func,
};

export default TripCard;
