import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createTrip } from '../../helpers/data/tripData';

export default function TripForm({ formTitle, setTrips }) {
  const [trip, setTrip] = useState({
    title: '',
    startDate: '',
    endDate: '',
    firebaseKey: '',
    uid: '',
  });

  const handleInputChange = (e) => {
    setTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTrip(trip).then(setTrips);
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
        <FormGroup>
          <Label>Start Date:</Label>
          <Input
            name="startDate"
            type="text"
            placeholder="Start Date"
            value={trip.startDate}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>End Date:</Label>
          <Input
            name="endDate"
            type="text"
            placeholder="End Date"
            value={trip.endDate}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
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
};
