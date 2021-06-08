import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleTrip } from '../helpers/data/tripData';

export default function SingleTripView() {
  const [trip, setTrip] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSingleTrip(id).then(setTrip);
  }, []);

  return (
    <div>
      <h5>{trip.title}</h5>
    </div>
  );
}

SingleTripView.propTypes = {
  id: PropTypes.string,
};
