import React, { useEffect, useState } from 'react';
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
import { Modal } from 'react-responsive-modal';
// import { getPressureData } from '../../helpers/data/externalData';
import { deleteTripLocations } from '../../helpers/data/tripsLocationsData';
import ModifyLocationForm from '../Forms/ModifyLocationForm';
import { getTripLocation } from '../../helpers/data/locationData';

const LocationItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  box-shadow: 50px;
`;

export default function TripLocationCard({
  firebaseKey, tripLocation, setTripLocations, cityName, uid
}) {
  const [pressure, setPressure] = useState({
    main: {
      pressure: 0
    }
  });
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getTripLocation(tripLocation.tripId).then((resp) => setPressure(resp));
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

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTripLocations(firebaseKey, uid).then((tripsArray) => setTripLocations(tripsArray));
        break;
      case 'edit':
        setOpen((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className={handleBgColorChange(pressure)} id="tripLocations">
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
            <i className='fas fa-pencil-alt mt-2 mr-3'
                onClick={() => {
                  handleClick('edit');
                }}
              >
                {onOpenModal ? '' : ''}
            </i>
          </ButtonToolbar>
          <Modal
            open={open}
            onClose={onCloseModal}
            classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
            }}
          >
          <ModifyLocationForm
            formTitle="Edit Location"
            setTripLocations={setTripLocations}
            firebaseKey={firebaseKey}
            cityName={cityName}
          />
          </Modal>
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
