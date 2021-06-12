import React from 'react';
import PropTypes from 'prop-types';

export default function SingleTripBlock({ children, trip }) {
  return (
    <div>
      <h1>Trip: {trip.name }</h1>
        {children}
      <footer>This is the footer</footer>
    </div>
  );
}

SingleTripBlock.propTypes = {
  children: PropTypes.any,
  trip: PropTypes.object
};
