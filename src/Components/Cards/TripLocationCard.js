import React, { useEffect, useState } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getPressureData } from '../../helpers/data/externalData';
// import { useHistory } from 'react-router-dom';
// import { addLocation } from '../../helpers/data/locationData';

export default function TripLocationCard({ firebaseKey, tripLocation }) {
  const [pressure, setPressure] = useState({
    main: {
      pressure: 0
    }
  });
  // const history = useHistory();
  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   const locationObj = {
  //     cityName: pressure.name,
  //     tripId: firebaseKey,
  //     uid
  //   };
  //   addLocation(locationObj).then(history.push(`/trips/${firebaseKey}`));
  // };

  console.warn(firebaseKey);
  useEffect(() => {
    getPressureData(tripLocation.name).then((resp) => setPressure(resp));
  }, []);

  const handleBgColorChange = (pressureValue) => {
    let bgColorClass = '';
    if (pressureValue >= 968 && pressureValue <= 998) {
      bgColorClass = 'green';
    } else if (pressureValue >= 999 && pressureValue <= 1002) {
      bgColorClass = 'yellow';
    } else if (pressureValue >= 1002 && pressureValue <= 1007) {
      bgColorClass = 'red';
    } else if (pressureValue > 1008) {
      bgColorClass = 'purple';
    } else {
      bgColorClass = 'white';
    }

    return bgColorClass;
  };

  // const handleClick = (type) => {
  //   switch (type) {
  //     case 'delete':
  //       deleteTrip(firebaseKey, user.uid).then((tripsArray) => setTrips(tripsArray));
  //       break;
  //     case 'edit':
  //       setOpen((prevState) => !prevState);
  //       break;
  //     default:
  //       console.warn('nothing selected');
  //   }
  // };

  return (
    <div className={handleBgColorChange(pressure.main.pressure)} id="pressureReading">
      <Card id="pressure-card"
        className="shadow rounded">
        <CardBody>
          <CardTitle tag="h5">{tripLocation.name}</CardTitle>
          <CardText>{pressure.main.pressure} | hPa</CardText>
        </CardBody>
          <i className='fas fa-trash-alt mt-2 mr-3'></i>
          <i className='fas fa-pencil-alt mt-2 mr-3'></i>
      </Card>
    </div>
  );
}

TripLocationCard.propTypes = {
  firebaseKey: PropTypes.any,
  tripLocation: PropTypes.object
};
