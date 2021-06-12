import React from 'react';
import PropTypes from 'prop-types';

export default function SingleTripBlock({ trip }) {
  return (
    <div>
      <h1>Trip: {trip.name }</h1>
    </div>
  );
}

SingleTripBlock.propTypes = {
  trip: PropTypes.object
};
