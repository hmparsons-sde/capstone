import React, { useState } from 'react';
import {
  Card, CardText, CardTitle, ButtonToolbar, CardImg
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';
import TripForm from '../Forms/TripForm';
import { deleteTripLocations } from '../../helpers/data/tripsLocationsData';
import { getLocation } from '../../helpers/data/locationData';

const TripItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  box-shadow: 50px;
`;

const TripCard = ({
  firebaseKey,
  user,
  title,
  startDate,
  endDate,
  setTrips,
  setLocations,
  imageUrl
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTripLocations(firebaseKey, user.uid)
          .then(setTrips)
          .then(() => getLocation(user.uid))
          .then(setLocations);
        break;
      case 'edit':
        setOpen((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/trips/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div>
    <TripItem className='col-auto'>
      <Card key={firebaseKey} body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}>
      <CardImg id="cardImg" src={imageUrl} width='100%' height='100%' alt="Card image cap"></CardImg>
      <CardText className="mt-3 ml-3" tag='h5'>
         {startDate} - {endDate}
        </CardText>
      <CardTitle tag="h1" className='ml-3 mb-1'>{title}</CardTitle>
        <ButtonToolbar size="lg" className='float-right mb-3 ml-3'>
          <i className="fas fa-paper-plane mt-2 mr-3" size='6x'></i>
          <i className='far fa-eye mt-2 mr-3'
              onClick={() => handleClick('view')}></i>
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
          <TripForm
            formTitle="Edit Trip"
            setTrips={setTrips}
            firebaseKey={firebaseKey}
            title={title}
            startDate={startDate}
            endDate={endDate}
            user={user}
          />
        </Modal>
      </Card>
    </TripItem>
    </div>
  );
};

TripCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  title: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  setTrips: PropTypes.func,
  setLocations: PropTypes.func,
  imageUrl: PropTypes.string,
};

export default TripCard;
