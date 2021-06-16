import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  ButtonToolbar
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import ModifyLocationForm from '../Forms/ModifyLocationForm';
import { deleteLocation, getTripLocation } from '../../helpers/data/locationData';

const LocationItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  box-shadow: 50px;
`;

export default function TripLocationCard(props) {
  const { tripLocation, setTripLocations } = props;

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

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteLocation(tripLocation.firebaseKey, tripLocation.uid)
          .then(() => getTripLocation(tripLocation.tripId))
          .then((response) => setTripLocations(response));
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className={handleBgColorChange(tripLocation.pressure)} id="tripLocations">
      <LocationItem className='col-auto'>
        <Card id="pressure-card"
          className="shadow rounded">
          <CardBody>
            <CardTitle tag="h5">{tripLocation.cityName}</CardTitle>
            <CardText>{tripLocation.pressure} | hPa</CardText>
          </CardBody>
          <ButtonToolbar size="lg" className='float-right mb-3 ml-3'>
            <i className='fas fa-trash-alt mt-2 mr-3'
                onClick={() => {
                  handleClick('delete');
                }}
            ></i>
          </ButtonToolbar>
        </Card>
      </LocationItem>
    </div>
  );
}

TripLocationCard.propTypes = {
  firebaseKey: PropTypes.any,
  tripLocation: PropTypes.object,
  setTripLocations: PropTypes.func,
  cityName: PropTypes.string,
  uid: PropTypes.any
};
