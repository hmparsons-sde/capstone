import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { addLocation } from '../../helpers/data/locationData';

export default function SearchResultCard({ uid, firebaseKey, ...pressureObj }) {
  const history = useHistory();
  const handleAdd = (e) => {
    e.preventDefault();
    const locationObj = {
      cityName: pressureObj.name,
      tripId: firebaseKey,
      uid
    };
    addLocation(locationObj).then(history.push(`/trips/${firebaseKey}`));
  };

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
          <Button type='submit'color="dark" onClick={handleAdd}>Add to trip</Button>
      </Card>
    </div>
  );
}

SearchResultCard.propTypes = {
  name: PropTypes.string,
  pressure: PropTypes.number,
  uid: PropTypes.any,
  firebaseKey: PropTypes.any
};
