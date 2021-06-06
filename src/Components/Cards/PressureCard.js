import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';

const ShowPressure = ({ ...pressureObj }) => (
  <Card id="pressure-card"
    className="shadow rounded">
    <CardBody>
      <CardTitle tag="h5">{pressureObj.name}</CardTitle>
      <CardText>{pressureObj.main.pressure} | hPa</CardText>
    </CardBody>
  </Card>
);

ShowPressure.propTypes = {
  name: PropTypes.string,
  pressure: PropTypes.number
};

export default ShowPressure;

// on Pressure card, add "add to trip" button + dropdown OR "discard" to delete reading.
// adding to a trip is "creating" (like a pin to a board)
// get data from API + create by adding to Firebase
