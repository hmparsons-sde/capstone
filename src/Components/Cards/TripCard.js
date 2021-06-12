import React, { useState } from 'react';
import {
  Button, Card, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deleteTrip } from '../../helpers/data/tripData';
import TripForm from '../Forms/TripForm';

const TripCard = ({
  firebaseKey,
  user,
  title,
  startDate,
  endDate,
  setTrips,
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTrip(firebaseKey, user.uid).then((tripsArray) => setTrips(tripsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/trips/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
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
        {editing ? 'Close Form' : 'Edit Trip'}
      </Button>
      {editing
        && <TripForm
          formTitle="Edit Trip"
          setTrips={setTrips}
          firebaseKey={firebaseKey}
          title={title}
          startDate={startDate}
          endDate={endDate}
          user={user}
        />
      }
    </Card>
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
