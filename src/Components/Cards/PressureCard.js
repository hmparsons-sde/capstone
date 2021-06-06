import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';

const ShowPressure = ({ ...pressureObj }) => {
  const handleBgColorChange = () => {
    let bgColorClass = '';
    if (pressureObj.main.pressure >= 968 && pressureObj.main.pressure <= 998) {
      bgColorClass = 'green';
    } else if (pressureObj.main.pressure >= 999 && pressureObj.main.pressure <= 1002) {
      bgColorClass = 'yellow';
    } else if (pressureObj.main.pressure >= 1002 && pressureObj.main.pressure <= 1007) {
      bgColorClass = 'red';
    } else if (pressureObj.main.pressure > 1008) {
      bgColorClass = 'purple';
    }

    return bgColorClass;
  };

  return (
  <div className={handleBgColorChange(pressureObj.main.pressure)} id="pressureReading">
    <Card id="pressure-card"
      className="shadow rounded">
      <CardBody>
        <CardTitle tag="h5">{pressureObj.name}</CardTitle>
        <CardText>{pressureObj.main.pressure} | hPa</CardText>
      </CardBody>
    </Card>
  </div>
  );
};
ShowPressure.propTypes = {
  name: PropTypes.string,
  pressure: PropTypes.number
};

export default ShowPressure;

// on Pressure card, add "add to trip" button + dropdown OR "discard" to delete reading.
// adding to a trip is "creating" (like a pin to a board)
// get data from API + create by adding to Firebase
