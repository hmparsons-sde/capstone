import React, { useState } from 'react';
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
import { useHistory, useParams } from 'react-router-dom';
import { deleteLocation, getTripLocation } from '../../helpers/data/locationData';
import { getForecastData } from '../../helpers/data/externalData';

const LocationItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  box-shadow: 50px;
`;

export default function TripLocationCard(props) {
  const { tripLocation, setTripLocations } = props;
  const history = useHistory();
  const { firebaseKey } = useParams();
  const [forecast, setForecast] = useState([]);
  const [userInput, setUserInput] = useState('');

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

  const grabForecast = () => {
    getForecastData(userInput).then((response) => {
      forecast.push(response);
      setForecast([...forecast]);
    });
  };

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteLocation(tripLocation.firebaseKey, tripLocation.uid)
          .then(() => getTripLocation(tripLocation.tripId))
          .then((response) => setTripLocations(response));
        break;
      case 'view':
        history.push(`/trips/${firebaseKey}/singletrip`);
        grabForecast(tripLocation.cityName);
        setUserInput('');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className={handleBgColorChange(tripLocation.pressureValue)} id="tripLocations">
      <LocationItem className='col-auto'>
        <Card id="pressure-card"
          className="shadow rounded"
          body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
          key={firebaseKey}
          >
          <CardBody>
            <CardTitle tag="h5">{tripLocation.cityName}</CardTitle>
            <CardText>{tripLocation.pressure} | hPa</CardText>
          </CardBody>
          <ButtonToolbar size="lg" className='float-right mb-3 ml-3' id="button-toolbar">
            <i className='fas fa-trash-alt mt-2 mr-3'
                onClick={() => {
                  handleClick('delete');
                }}
            ></i>
            <i className='far fa-eye mt-2 mr-3'
              onClick={() => handleClick('view')}
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
