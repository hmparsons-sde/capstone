import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createTrip, updateTrips } from '../../helpers/data/tripData';

export default function TripForm({
  formTitle, setTrips, title, startDate, endDate, firebaseKey, user, imageUrl
}) {
  const [trip, setTrip] = useState({
    title: title || '',
    startDate: startDate || '',
    endDate: endDate || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid,
    imageUrl: imageUrl || ''
  });

  const handleInputChange = (e) => {
    setTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.firebaseKey) {
      updateTrips(trip, firebaseKey).then(setTrips);
    } else {
      createTrip(trip, user.uid).then(setTrips);
      history.push('trips');
    }
  };

  return (
    <div className="trip-form-container">
      <Form className="add-trip-form" autoComplete="off">
        <h1>{formTitle}</h1>
        <FormGroup>
          <Label>Trip Title:</Label>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={trip.title}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <br></br>
        <FormGroup>
        <Input
          name="imageUrl"
          type="url"
          placeholder="Add an image"
          value={imageUrl}
          onChange={handleInputChange}
          className="mt-1"
        ></Input>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label>Start Date:</Label>
          <Input
            name="startDate"
            type="date"
            placeholder="Start Date"
            value={trip.startDate}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label>End Date:</Label>
          <Input
            name="endDate"
            type="date"
            placeholder="End Date"
            value={trip.endDate}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <br></br>
        <Button
          color="danger"
          type="submit"
          onClick={handleSubmit}
          className="mt-4"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

TripForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  setTrips: PropTypes.func,
  title: PropTypes.string,
  firebaseKey: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  trips: PropTypes.array,
  imageUrl: PropTypes.string,
};
