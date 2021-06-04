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
