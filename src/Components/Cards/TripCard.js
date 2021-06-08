import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteTrip } from '../../helpers/data/tripData';

const TripCard = ({
  firebaseKey,
  title,
  startDate,
  endDate,
  setTrips
}) => {
  const handleClick = () => {
    deleteTrip(firebaseKey)
      .then((tripsArray) => setTrips(tripsArray));
  };

  return (
    <Card body>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{startDate} - {endDate}</CardText>
        <Button color="danger" onClick={handleClick}>Delete Trip</Button>
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
