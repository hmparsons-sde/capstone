import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deleteTrip } from '../../helpers/data/tripData';
import TripForm from '../Forms/TripForm';

const TripCard = ({
  firebaseKey,
  title,
  startDate,
  endDate,
  setTrips
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTrip(firebaseKey)
          .then((tripsArray) => setTrips(tripsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  const history = useHistory();

  return (
    <Card body>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{startDate} - {endDate}</CardText>
        <Button color="warning" onClick={() => history.push(`/trips/${firebaseKey}`)}>View Trip</Button>
        <Button color="danger" onClick={() => { handleClick('delete'); }}>Delete Trip</Button>
        <Button color="info" onClick={() => { handleClick('edit'); }}>
          {editing ? 'Close Form' : 'Edit Trip'}
        </Button>
        {
          editing && <TripForm
            formTitle='Edit Trip'
            setTrips={setTrips}
            firebaseKey={firebaseKey}
            title={title}
            startDate={startDate}
            endDate={endDate}
          />
        }
    </Card>
  );
};

TripCard.propTypes = {
  firebaseKey: PropTypes.string,
  title: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  setTrips: PropTypes.func
};

export default TripCard;
