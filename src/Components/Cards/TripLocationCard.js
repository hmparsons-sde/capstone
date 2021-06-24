import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  ButtonToolbar,
  CardDeck
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import { useHistory, useParams } from 'react-router-dom';
import { deleteLocation, getTripLocation } from '../../helpers/data/locationData';

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

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteLocation(tripLocation.firebaseKey, tripLocation.uid)
          .then(() => getTripLocation(tripLocation.tripId))
          .then((response) => setTripLocations(response));
        break;
      case 'view':
        history.push(`/trips/${firebaseKey}/${tripLocation.cityName}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div id="tripLocations">
      <CardDeck>
      <LocationItem className='col-auto'>
        <Card id="pressure-card"
          className="shadow rounded"
          body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
          key={firebaseKey}
          >
          <CardBody>
            <CardTitle tag="h3" className="text-center mb-3">{tripLocation.cityName}</CardTitle>
          </CardBody>
          <ButtonToolbar size="lg" className='justify-content-center mb-3 ml-2' id="button-toolbar">
            <i className='far fa-trash-alt fa-lg mt-2 mr-3'
                onClick={() => {
                  handleClick('delete');
                }}
            ></i>
            <i className='far fa-eye fa-lg mt-2 mr-3'
              onClick={() => handleClick('view')}
            ></i>
          </ButtonToolbar>
        </Card>
      </LocationItem>
      </CardDeck>
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
